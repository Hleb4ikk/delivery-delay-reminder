import { Injectable } from '@nestjs/common';
import { db } from 'src/database/db';
import { users } from 'src/database/schemas/users.schema';
import { User } from './user.entitiy';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  async create(user: User) {
    return await db
      .insert(users)
      .values({ ...user })
      .returning({ id: users.id, email: users.email });
  }

  async findByEmail(email: string) {
    return await db.select().from(users).where(eq(users.email, email));
  }
  async findById(id: number) {
    return (await db.select().from(users).where(eq(users.id, id)))[0];
  }
}
