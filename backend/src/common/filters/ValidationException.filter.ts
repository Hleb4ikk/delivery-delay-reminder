import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ValidationException } from '../exceptions/validation.exception';
import { ValidationErrors } from 'src/types';

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const code = exception.getStatus();
    const message = exception.getResponse();
    const errors = exception.cause as ValidationErrors;
    response.status(code).json({ code, message, ...errors });
  }
}
