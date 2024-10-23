"use client";
import { Button } from "@/components";
import SiteConfig from "@/etc/config/stie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 navbar bg-base-100 z-[50] transition-all w-[94%] md:w-[92%] mx-auto rounded-xl shadow-xl border-2 border-indigo-400 hover:border-indigo-700 my-2">
        <div className="navbar ">
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
                        className="bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl"
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
          <div className="navbar-end">
            <Link
              href={SiteConfig.github}
              title="گیت هاب"
              rel="nofollow"
              aria-label="GitHub"
              target="_blank"
            >
              <Button
                title="GitHub"
                color="btn-neutral"
                icon={<FaGithub color="white" size={20} />}
              />
            </Link>
          </div>
        </div>
      </header>
      {isOpen && (
        <nav className="fixed top-[95px] backdrop-blur-md rounded-xl shadow-xl mx-auto left-0 right-0 z-[50] w-[94%] md:w-[92%] border-2 border-indigo-700">
          <ul className="flex gap-4 items-center  flex-col my-3 p-2 shadow lg:hidden bg-inherit">
            {nav?.map((item) => {
              return (
                <li key={`mobile_menu_item_${item.id}`} className="mx-1 w-3/4">
                  {pathname === item.link ? (
                    <Link
                      href={item.link}
                      className="p-2 bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl block w-full text-center"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      className="p-2 border-2 border-indigo-700 rounded-xl block w-full text-center"
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
