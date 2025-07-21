import { CarrierEnum } from '../../orders/enums/carrier.enum';

import { pgTable, varchar, timestamp, pgEnum, uuid } from 'drizzle-orm/pg-core';

export const carrierEnum = pgEnum(
  'carrierEnum',
  Object.values(CarrierEnum) as [string, ...string[]],
);

export const orders = pgTable('orders', {
  id: varchar('id', { length: 20 }).primaryKey(),
  customerName: varchar('customer_name', { length: 255 }).notNull(),
  customerEmail: varchar('customer_email', { length: 255 }).notNull(),
  deliveryAddress: varchar('delivery_address', { length: 255 }).notNull(),
  estDeliveryDate: timestamp('est_delivery_date').notNull(),
  carrier: carrierEnum('carrier').notNull(),
});
