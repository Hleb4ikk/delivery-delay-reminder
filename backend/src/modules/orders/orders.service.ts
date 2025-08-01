import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { db } from 'src/database/db';
import { orders } from 'src/database/schemas/orders.schema';
import { asc, eq } from 'drizzle-orm';

@Injectable()
export class OrdersService {
  async findOrders(page: number) {
    return await db
      .select()
      .from(orders)
      .orderBy(asc(orders.id))
      .limit(6)
      .offset((page - 1) * 6);
  }

  async findOne(id: number) {
    return (await db.select().from(orders).where(eq(orders.id, id)))[0];
  }

  async create(createOrderDto: CreateOrderDto) {}

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await db
      .update(orders)
      .set(updateOrderDto)
      .where(eq(orders.id, id))
      .returning({ orderId: orders.id });
  }
  async delete(id: number) {
    await db.delete(orders).where(eq(orders.id, id));
  }
}
