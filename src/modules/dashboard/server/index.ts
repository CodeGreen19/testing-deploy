"use server";

import { db } from "@/lib/db";
import { usersTable } from "@/lib/schema/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createUser(data: {
  name: string;
  email: string;
  gender: string;
  age: number;
}) {
  await db.insert(usersTable).values(data);
  revalidatePath("/");
}

export async function getUsers() {
  return db.select().from(usersTable);
}
export async function getUserEmail() {
  return db.select({ email: usersTable.email }).from(usersTable);
}

export async function deleteUser(id: number) {
  await db.delete(usersTable).where(eq(usersTable.id, id));
  revalidatePath("/");
}
