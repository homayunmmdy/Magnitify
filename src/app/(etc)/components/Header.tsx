"use client";
import { Button, ThemeToggle } from "@/components";
import SiteConfig from "@/etc/config/stie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="navbar fixed left-0 right-0 top-0 z-[50] mx-auto my-2 w-[94%] rounded-xl border-2 border-indigo-400 bg-base-100 shadow-xl transition-all hover:border-indigo-700 md:w-[92%]">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <Button
                title={
                  <svg
                    onClick={toggleMenu}
                    className="h-6 w-6 lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                }
                color="btn-ghost"
                style="lg:hidden"
                ariaLabel="close and open menu"
              />
            </div>
            <Link href="/">
              <Button title={SiteConfig.name} color="btn-primary" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {nav?.map((item) => {
                return (
                  <li key={`dektop_menu_item_${item.id}`} className="mx-1">
                    {pathname == item.link ? (
                      <Link
                        href={item.link}
                        className="rounded-xl bg-indigo-700 text-white hover:bg-indigo-700"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        className="rounded-xl border-2 border-base-100 hover:border-blue-700 hover:bg-base-100 hover:text-indigo-700"
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <ThemeToggle />
            <Link
              href="/sign-up"
              title="ورود"
              rel="nofollow"
              aria-label="sign-up"
              target="_blank"
            >
              <Button
                title="ورود"
                style="btn-outline"
                color="btn-primary"
                icon={<IoMdLogIn size={20} />}
              />
            </Link>
          </div>
        </div>
      </header>
      {isOpen && (
        <nav className="fixed left-0 right-0 top-[95px] z-[50] mx-auto w-[94%] rounded-xl border-2 border-indigo-700 shadow-xl backdrop-blur-md md:w-[92%]">
          <ul className="my-3 flex flex-col items-center gap-4 bg-inherit p-2 shadow lg:hidden">
            {nav?.map((item) => {
              return (
                <li key={`mobile_menu_item_${item.id}`} className="mx-1 w-3/4">
                  {pathname === item.link ? (
                    <Link
                      href={item.link}
                      className="block w-full rounded-xl bg-indigo-700 p-2 text-center text-white hover:bg-indigo-700"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      className="block w-full rounded-xl border-2 border-indigo-700 p-2 text-center"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
