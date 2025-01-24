"use client";
import { Button, Input } from "@/components";
import { MASTER_KEY } from "@/config/Constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MasterEditorPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isMasterEditor = localStorage.getItem(MASTER_KEY);
    if (isMasterEditor) {
      toast.success("you're welcome");
      router.push("/admin");
    }
  }, []);

  const handleLogin = () => {
    const KEY = process.env.NEXT_PUBLIC_MASTER_EDITOR_KEY;
    if (password == `${KEY}`) {
      toast.success("you're welcome");
      localStorage.setItem(MASTER_KEY, "" + true);
      router.push("/admin");
    } else {
      toast.error("Invalid key");
    }
  };
  return (
    <>
      <Toaster />
      <div className="container mx-auto max-w-xl p-6">
        <div className="rounded-lg border-2 border-indigo-400 p-6 shadow-xl">
          <h1 className="mb-4 text-2xl font-semibold">
            Enter Your Master Key and Enjoy it!
          </h1>

          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block font-semibold">
              Secret Key:
            </label>
            <Input
              type="password"
              id="password"
              style="w-full"
              color="input-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter your Master key"
            />
          </div>

          <div className="text-center">
            <Button onClick={handleLogin} type="submit" color="btn-primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterEditorPage;
