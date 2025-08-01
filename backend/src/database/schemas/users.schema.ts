import { pgTable, varchar, timestamp, serial, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { orders } from './orders.schema';
import { stageSystems } from './stage-systems.schema';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
  stageSystems: many(stageSystems),
}));
