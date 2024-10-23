"use client";
import { Button, Input } from "@/components";
import { AUTH_KEY } from "@/etc/config/Constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, []);
  const handleLogin = () => {
    const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
    const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
    if (username == `${USERNAME}` && password == `${PASSWORD}`) {
      //@ts-ignore
      localStorage.setItem(AUTH_KEY, true);
      router.push("/admin");
      toast.success("you're welcome");
    } else {
      toast.error("Invalid username or password");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex font-poppins items-center justify-center">
        <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
          <div className="grid gap-8 p-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
              <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                  Log in
                </h1>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2  dark:text-gray-400 text-lg"
                    >
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style="p-3 focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 dark:text-gray-400 text-lg"
                    >
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                      style="p-3 focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                    />
                  </div>
                  <Button
                    title="LOG IN"
                    type="submit"
                    color="btn-primary"
                    style="w-full mt-6 text-white"
                    onClick={handleLogin}
                  />
                </form>

                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <Link
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/privacy_policy"
                      title="Privacy Policy"
                    >
                      <span className="cursor-pointer px-1 bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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
