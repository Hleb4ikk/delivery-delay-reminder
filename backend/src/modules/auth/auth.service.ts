import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const [userExists] = await this.usersService.findByEmail(dto.email);
    if (userExists) {
      throw new UnauthorizedException('User already exists');
    }

    const hash = await bcrypt.hash(dto.password, 10);
    const [user] = await this.usersService.create({
      ...dto,
      passwordHash: hash,
    });

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  async login(dto: LoginDto) {
    const [user] = await this.usersService.findByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
