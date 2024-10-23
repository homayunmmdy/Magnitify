"use client";
import useCheckLogin from "@/hooks/useCheckLogin";
import { Sidebar } from "./components/sections";
import React from 'react'

export default function AdminLayout({ children }:{ children: React.ReactNode }) {
  useCheckLogin()
  return (
    <>
      <div className="grid grid-cols-12 p-5 gap-5">
        <aside className="col-span-12  lg:col-span-3 rounded-xl shadow-xl border-2 border-indigo-400">
            <Sidebar />
        </aside>
        <main className="col-span-12  lg:col-span-9 rounded-xl mt-5 lg:mt-0 shadow-xl border-2 border-indigo-400">
          <div className=" w-full h-full p-4">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
