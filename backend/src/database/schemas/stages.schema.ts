import {
  pgTable,
  varchar,
  timestamp,
  serial,
  integer,
  text,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { stageSystems } from './stage-systems.schema';

export const stages = pgTable('stages', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  order: integer('order').notNull(),
  stageSystemId: integer('stage_system_id')
    .references(() => stageSystems.id)
    .notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const stagesRelations = relations(stages, ({ one }) => ({
  stageSystem: one(stageSystems, {
    fields: [stages.stageSystemId],
    references: [stageSystems.id],
  }),
}));
