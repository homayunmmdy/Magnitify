"use client";
import { usePathname } from "next/navigation";

export const getParameterId = (sliceCharacter: number) => {
  const pathname = usePathname();
  return pathname.slice(sliceCharacter);
};


