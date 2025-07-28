"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const addUser = async (user: any) => {
  await db.insert(users).values({
    id: user.id,
    name: user.name,
    email: user.email,
    clerkId: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    photo: user.imageUrl,
  });
  revalidatePath("/");
};
