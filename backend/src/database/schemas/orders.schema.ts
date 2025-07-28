import { CarrierEnum } from '../../modules/orders/enums/carrier.enum';

import {
  pgTable,
  varchar,
  timestamp,
  pgEnum,
  integer,
  serial,
} from 'drizzle-orm/pg-core';

import { relations } from 'drizzle-orm';
import { StageEnum } from 'src/modules/orders/enums';

export const carrierEnum = pgEnum(
  'carrierEnum',
  Object.values(CarrierEnum) as [string, ...string[]],
);

export const stageEnum = pgEnum(
  'stageEnum',
  Object.values(StageEnum) as [string, ...string[]],
);

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  customerName: varchar('customer_name', { length: 255 }).notNull(),
  customerEmail: varchar('customer_email', { length: 255 }).notNull(),
  deliveryAddress: varchar('delivery_address', { length: 255 }).notNull(),
  packageDescription: varchar('description', { length: 1024 }),
  estDeliveryDate: timestamp('est_delivery_date').notNull(),
  carrier: carrierEnum('carrier').notNull(),
  currentStage: stageEnum('current_stage').default(StageEnum.PREPARED),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
