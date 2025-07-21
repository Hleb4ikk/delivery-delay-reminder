import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  async findAll() {
    // Поиск всех заказов в базе данных
  }
  async findOne(id: number) {
    // Поиск заказа по id в базе данных
  }
  async create(createOrderDto: CreateOrderDto) {
    // Создание заказа в базе данных
  }
  async update(id: number) {
    // Обновление заказа в базе данных
  }
  async remove(id: number) {
    // Удаление заказа из базы данных
  }
}
