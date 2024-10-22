"use client";

import { signInWithProvider } from "@/app/actions/signInWithProvider";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

type Props = {};

export function GoogleButton({}: Props) {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    const { url, error } = await signInWithProvider("google");

    if (error) {
      toast.error(error);
      return;
    }

    if (url) {
      router.push(url);
    }
  }, [router]);

  return (
    <button
      onClick={handleClick}
      className="rounded-lg border p-6 hover:bg-stone-100 dark:border-[#212121] hover:dark:bg-stone-900"
    >
      <NextImage src={"/googleLogo.png"} alt="google-logo" width={50} height={50} />
    </button>
  );
}
