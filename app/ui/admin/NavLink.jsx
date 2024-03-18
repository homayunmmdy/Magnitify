'use client'
import { TiHome } from "react-icons/ti";
import { MdOutlinePostAdd , MdInfoOutline } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineNewLabel } from "react-icons/md";

import Link from "next/link";


const links = [
    { name: " ادمین", href: "/admin", icon: TiHome },
    { name: "پست ها", href: "/admin/posts", icon: CgFeed },
    { name: "پست جدید", href: "/admin/post/new", icon: MdOutlinePostAdd },
    { name: "برچسب", href: "/admin/category", icon: MdOutlineNewLabel },
    { name: " درباره ما", href: "/admin/about", icon: MdInfoOutline },
    { name: " تماس باما", href: "/admin/contacts", icon: PiPhoneCallFill },
    { name: "خبرنامه", href: "/admin/newsletter", icon: FaRegNewspaper },
];
const AdminNavLink = () => {
    const pathname = usePathname();
  return (
    <ul className="mb-auto pt-1">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}>
            {pathname === link.href ? (
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span>
                    <LinkIcon className="h-6 w-6" color="rgb(67, 56, 202)" />
                  </span>
                  <p className="leading-1 flex ms-4 font-medium text-indigo-700">
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