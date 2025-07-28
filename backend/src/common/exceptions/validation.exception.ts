import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationErrors } from 'src/types';

export class ValidationException extends HttpException {
  constructor(errors: ValidationErrors) {
    super('Validation failed.', HttpStatus.BAD_REQUEST, { cause: errors });
  }
}
