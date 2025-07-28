import * as dotenv from 'dotenv';

import { Pool } from 'pg';
import * as schemas from './schemas/schemas';

import { drizzle } from 'drizzle-orm/node-postgres';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export const db = drizzle(pool, {
  schema: { ...schemas },
});
