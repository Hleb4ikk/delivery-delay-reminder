import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: ['./src/database/schemas/schemas.ts'],
  out: './src/database/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
