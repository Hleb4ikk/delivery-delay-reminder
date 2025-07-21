import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Post, Body } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
}
