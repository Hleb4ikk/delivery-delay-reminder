import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseFilters,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { registerSchema } from './schemas/register.dto';
import { ValidationExceptionFilter } from 'src/common/filters/ValidationException.filter';
import { configDotenv } from 'dotenv';
import { Response } from 'express';

configDotenv();

@UseFilters(ValidationExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseGuards(GuestGuard)
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body(new ZodValidationPipe(registerSchema)) dto: RegisterDto,
  ) {
    return await this.authService.register(dto);
  }

  @Post('login')
  @UseGuards(GuestGuard)
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { access_token } = await this.authService.login(dto);
    res.setHeader(
      'Set-Cookie',
      `Authentication=${access_token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
    );

    return { message: 'Logged in successfully' };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    res.setHeader(
      'Set-Cookie',
      'Authentication=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax' +
        (process.env.NODE_ENV === 'production' ? '; Secure' : ''),
    );
    return { message: 'Logged out successfully' };
  }
}
