"use client";
import { AUTH_KEY } from "@/etc/config/Constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useCheckLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);
};

export default useCheckLogin;
