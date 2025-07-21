import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { CarrierEnum } from '../enums/carrier.enum';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Customer name is required' })
  customerName: string;

  @IsEmail({}, { message: 'Invalid email' })
  customerEmail: string;

  @IsNotEmpty({ message: 'Delivery address is required' })
  deliveryAddress: string;

  @IsDate({ message: 'Invalid date' })
  estDeliveryDate: Date;

  @IsEnum(CarrierEnum, { message: 'Invalid carrier' })
  carrier: CarrierEnum;

  @IsOptional()
  packageDescription: string;
}
