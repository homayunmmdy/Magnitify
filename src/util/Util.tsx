"use client"
import { MASTER_KEY } from "@/etc/config/Constants";
import { usePathname } from "next/navigation";

export const getParameterId = (sliceCharacter: number) => {
  const pathname = usePathname();
  return pathname.slice(sliceCharacter);
};

export const checkMaster = (): boolean => {
  let master: boolean;
  const isMaster =
    typeof window !== "undefined" ? localStorage.getItem(MASTER_KEY) : false;

  isMaster ? (master = true) : (master = false);

  return master;
};