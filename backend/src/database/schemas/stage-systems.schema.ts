import {
  pgTable,
  varchar,
  timestamp,
  serial,
  integer,
  text,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users.schema';
import { stages } from './stages.schema';
import { orders } from './orders.schema';

export const stageSystems = pgTable('stage_systems', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  userId: integer('user_id').references(() => users.id).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const stageSystemsRelations = relations(stageSystems, ({ one, many }) => ({
  user: one(users, {
    fields: [stageSystems.userId],
    references: [users.id],
  }),
  stages: many(stages),
  orders: many(orders),
}));