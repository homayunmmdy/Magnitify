import { MASTER_KEY } from "@/etc/config/Constants";

export const checkMaster = (): boolean => {
  let master: boolean;
  const isMaster =
    typeof window !== "undefined" ? localStorage.getItem(MASTER_KEY) : false;

  isMaster ? (master = true) : (master = false);

  return master;
};
