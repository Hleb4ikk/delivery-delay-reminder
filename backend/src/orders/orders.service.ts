import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  async findAll() {
    // Поиск всех заказов в базе данных
  }

  async findOne(id: string) {
    // Поиск заказа по id в базе данных
  }

  async create(createOrderDto: CreateOrderDto) {
    // Создание заказа в базе данных
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    // Обновление заказа в базе данных
  }

  async remove(id: string) {
    // Удаление заказа из базы данных
  }
}
