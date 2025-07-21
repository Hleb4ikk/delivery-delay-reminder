import { CarrierEnum } from '../enums/carrier.enum';

import {
  pgTable,
  serial,
  varchar,
  numeric,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const carrierEnum = pgEnum(
  'carrierEnum',
  Object.values(CarrierEnum) as [string, ...string[]],
);

export const orders = pgTable('orders', {
  id: serial('id').primaryKey().unique(),
  customerName: varchar('customer_name', { length: 255 }).notNull(),
  customerEmail: varchar('customer_email', { length: 255 }).notNull(),
  deliveryAddress: varchar('delivery_address', { length: 255 }).notNull(),
  estDeliveryDate: timestamp('est_delivery_date').notNull(),
  carrier: carrierEnum('carrier').notNull(),
});
