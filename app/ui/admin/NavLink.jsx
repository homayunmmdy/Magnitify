'use client'
import { FaBattleNet } from "react-icons/fa6";
// import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { usePathname } from "next/navigation";

import Link from "next/link";


const links = [
    { name: " ادمین", href: "/admin", icon: IoHome },
    { name: "پست ها", href: "/admin/posts", icon: FaBattleNet },
    { name: "پست جدید", href: "/admin/post/new", icon: FaBattleNet },
    { name: " درباره ما", href: "/admin/about", icon: FaBattleNet },
];
const AdminNavLink = () => {
    // const location = useLocation();
    // const pathname = location.pathname;
    const pathname = usePathname();
    // const id = pathname.slice(9);
  return (
    <ul className="mb-auto pt-1">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            {pathname === link.href ? (
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span>
                    <LinkIcon className="h-6 w-6" color="rgb(67, 56, 202)" />
                  </span>
                  <p className="leading-1 flex ms-4 font-medium text-gray-600">
                    {link.name}
                  </p>
                </li>
                <div className="absolute top-px h-9 w-1 rounded-lg bg-indigo-700 end-0 dark:bg-indigo-400"></div>

              </div>
            ) : (
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span>
                    <LinkIcon className="h-6 w-6" />
                  </span>
                  <p className="leading-1 flex ms-4 font-medium text-gray-600">
                    {link.name}
                  </p>
                </li>
              </div>
            )}
          </Link>
        );
      })}
    </ul>
  );
};

export default AdminNavLink;