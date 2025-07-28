import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ValidationErrors } from 'src/types';
import { ZodObject, z } from 'zod';
import { ValidationException } from '../exceptions/validation.exception';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject) {}

  transform(value: any) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new ValidationException({
        errors: z.treeifyError(result.error).properties as ValidationErrors,
      });
    }
    return result.data;
  }
}
