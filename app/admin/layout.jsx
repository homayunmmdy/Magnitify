"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidbar from "../ui/admin/Sidebar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <aside className="col-span-12  lg:col-span-3">
            <AdminSidbar />
        </aside>
        <main className="col-span-12  lg:col-span-9">
          <div className=" w-full h-full px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
