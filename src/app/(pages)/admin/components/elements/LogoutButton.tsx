"use client";
import { Button } from "@/components";
import { AUTH_KEY } from "@/etc/config/Constants";
import useCheckLogin from "@/hooks/useCheckLogin";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  useCheckLogin();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    router.push("/");
  };

  return (
    <>
      <Button
        title="Logout"
        color="btn-error"
        onClick={handleLogout}
        style="w-full"
      />
    </>
  );
};

export default LogoutButton;
