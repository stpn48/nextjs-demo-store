"use server";

import { UserLoggedIn } from "@/types/types";
import prisma from "@/utils/prisma";
import { createClient } from "@/utils/supabase/server";

export async function getUser(): Promise<UserLoggedIn | null> {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const userRole = await prisma.userRole.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!userRole) {
    const newUserRole = await prisma.userRole.create({
      data: {
        userId: user.id,
        role: "loggedInUser",
      },
    });

    return { ...user, role: { ...newUserRole } } as UserLoggedIn;
  }

  return { ...user, role: { ...userRole } } as UserLoggedIn;
}
