import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const result = Number(value);

    if (!Number.isInteger(result) || result <= 0) {
      throw new BadRequestException({
        code: 400,
        message: 'Variable must be a positive integer',
      });
    }

    return result;
  }
}
