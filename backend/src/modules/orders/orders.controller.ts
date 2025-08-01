import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  UsePipes,
  UseFilters,
  HttpStatus,
  NotFoundException,
  Query,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { createOrderSchema } from './schemas/create-order.schema';

import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { ParsePositiveIntPipe } from 'src/common/pipes/parse-positive-int-pipe';

import { ValidationExceptionFilter } from 'src/common/filters/ValidationException.filter';
import { updateOrderSchema } from './schemas/update-order.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseFilters(ValidationExceptionFilter)
@Controller({ path: 'orders', version: '1' })
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findOrders(@Query('page', ParsePositiveIntPipe) page: number) {
    const orders = await this.ordersService.findOrders(page);
    return { code: HttpStatus.OK, data: orders };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParsePositiveIntPipe) id: number) {
    const order = await this.ordersService.findOne(id);
    if (!order) {
      throw new NotFoundException({
        code: HttpStatus.NOT_FOUND,
        message: `Not found order with id ${id}`,
      });
    }
    return { code: HttpStatus.OK, data: order };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ZodValidationPipe(createOrderSchema))
    createOrderDto: CreateOrderDto,
  ) {
    return {
      code: HttpStatus.CREATED,
      data: await this.ordersService.create(createOrderDto),
    };
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParsePositiveIntPipe) id: number,
    @Body(new ZodValidationPipe(updateOrderSchema))
    updateOrderDto: UpdateOrderDto,
  ) {
    return {
      code: HttpStatus.OK,
      data: await this.ordersService.update(id, updateOrderDto),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParsePositiveIntPipe) id: number) {
    await this.ordersService.delete(id);
  }
}
