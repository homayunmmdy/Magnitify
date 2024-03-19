"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, []);
  const handleLogin = () => {
    if (username == "test" && password == "123456") {
      localStorage.setItem("isLoggedIn", true);
      router.push("/admin");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header className="text-indigo-500 text-2xl	font-extrabold text-center">
          Magnitify <span className="text-black font-normal	">Admin</span>
        </header>
        <div>
          <label className="block mb-2 text-indigo-500" for="username">
            نام کاربری
          </label>
          <input
            className="w-full p-2 mb-3 text-black border-b-2 border-indigo-500 outline-none bg-gray-300"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500" for="password">
            رمز
          </label>
          <input
            className="w-full p-2 mb-3 text-black border-b-2 border-indigo-500 outline-none bg-gray-300"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            onClick={handleLogin}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
