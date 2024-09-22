"use server";

import prisma from "@/client/prismaclient";

export interface UserDataType {
  email: string;
  name?: string | null;
  clerkId: string;
}

export async function createUser(userData: UserDataType) {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    
    return user;
  } catch (err) {
    console.error(err);
  }
}
