import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
@Module({
  imports: [AuthModule, UsersModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
