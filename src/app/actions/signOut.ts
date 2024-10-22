"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function signOut() {
  const supabase = createClient();

  try {
    await supabase.auth.signOut();
  } catch (e) {
    throw new Error(
      "Unexpected error while signing out. If this issue persists, please contact support.",
    );
  }

  revalidatePath("/");
}
