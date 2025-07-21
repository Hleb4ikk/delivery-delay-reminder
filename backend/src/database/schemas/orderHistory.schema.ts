import {
  pgTable,
  varchar,
  timestamp,
  integer,
  pgEnum,
  uuid,
} from 'drizzle-orm/pg-core';
import { StageEnum } from 'src/orders/enums/stage.enum';

const stageEnum = pgEnum(
  'stageEnum',
  Object.values(StageEnum) as [string, ...string[]],
);

export const orderHistory = pgTable('order_history', {
  id: uuid('id').primaryKey().defaultRandom(),
  deliveryId: varchar('delivery_id', { length: 20 }).notNull(),
  stage: stageEnum('stage').notNull(),
  createdAt: timestamp('started_at').notNull(),
  endedAt: timestamp('ended_at'),
  durationSeconds: integer('duration_seconds'),
});
