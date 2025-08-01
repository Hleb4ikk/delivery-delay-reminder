import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';

configDotenv();

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const cookies = request.cookies;
    console.log(cookies.Authentication);
    if (!cookies || !cookies.Authentication) {
      return true; // нет куки — разрешаем доступ
    }

    const token = cookies.Authentication;

    try {
      this.jwtService.verify(token, {
        secret: process.env.SECRET ?? 'Your secret key',
      });
      // Если токен валиден — значит пользователь уже авторизован
      console.log('logged in');
      throw new UnauthorizedException('You are already logged in');
    } catch (err) {
      if (err instanceof UnauthorizedException) {
        throw err;
      }
      // Если токен невалиден или истёк — разрешаем доступ
      return true;
    }
  }
}
