"use client";

import { Button, Input } from "@/components";
import { AUTH_KEY } from "@/config/Constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Toast from "./components/Toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const didNavigateRef = useRef(false);

  // Check if the user is already authenticated
  useEffect(() => {
    if (didNavigateRef.current) return;

    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    if (isAuthenticated) {
      toast.success("You're already logged in.");
      router.push("/admin");
      didNavigateRef.current = true;
    }

    return () => {
      // Clean-up if needed
      didNavigateRef.current = false;
    };
  }, [router]);

  // Handle login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
    const USERNAME = process.env.NEXT_PUBLIC_USERNAME;

    if (!PASSWORD || !USERNAME) {
      console.error("Environment variables for login are missing.");
      toast.error("Server error. Please try again later.");
      return;
    }

    if (username === USERNAME && password === PASSWORD) {
      toast.success("Welcome back!");
      localStorage.setItem(AUTH_KEY, JSON.stringify(true));
      router.push("/admin");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <>
      <Toaster />
      <Toast />
      <div className="font-poppins flex items-center justify-center">
        <div className="flex h-screen w-screen items-center justify-center dark:bg-gray-900">
          <div className="grid gap-8 p-2">
            <div className="m-2 rounded-[26px] bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="m-2 rounded-[20px] border-[20px] border-transparent bg-white shadow-lg sm:p-2 md:p-6 dark:bg-gray-900">
                <h1 className="cursor-default py-4 text-center text-5xl font-bold dark:text-gray-400">
                  Log in
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="username"
                      className="mb-2 text-lg dark:text-gray-400"
                    >
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      aria-label="Enter username"
                      value={username}
                      color="input-primary"
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-lg p-3 duration-300 ease-in-out focus:scale-105"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="password"
                      className="mb-2 text-lg dark:text-gray-400"
                    >
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      aria-label="Enter password"
                      color="input-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg p-3 duration-300 ease-in-out focus:scale-105"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    color="btn-primary"
                    className="mt-6 w-full text-white"
                  >
                    LOG IN
                  </Button>
                </form>
                <div className="mt-4 flex flex-col items-center text-center text-sm text-gray-500">
                  <p className="cursor-default">
                    By signing in, you agree to our{" "}
                    <Link
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/privacy_policy"
                      title="Privacy Policy"
                    >
                      <span className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                        Privacy Policy
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
