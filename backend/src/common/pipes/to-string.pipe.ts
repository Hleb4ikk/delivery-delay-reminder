import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ToStringPipe implements PipeTransform {
  transform(value: any): string {
    return String(value);
  }
}
