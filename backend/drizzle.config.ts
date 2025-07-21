import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: ['./src/database/schemas/order.schema.ts'],
  out: './src/database/migrations',
});
