import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 200 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 200 }).notNull().unique(),
  gender: text().notNull().default("male"),
});
