import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { adminPages } from "@/config/adminPage";
import LogoutBtn from "@/app/(pages)/admin/components/LogoutBtn";

const NavLink: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="block h-full w-auto grow basis-full items-center overflow-auto">
        <ul className="mb-0 flex flex-col gap-2 pl-0">
          {adminPages.map((link, index) => {
            const LinkIcon = link.icon;
            return (
              <li className="mt-0.5 w-full" key={index}>
                {pathname === link.href ? (
                  <Link
                    className="py-2.7 shadow-soft-xl ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-amber-700 p-1 px-4 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                    href={link.href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-gradient-to-tl from-amber-700 to-yellow-500 bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="py-2.7 ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl p-1 px-4 text-sm transition-colors hover:bg-amber-500 hover:text-white"
                    href={link.href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-700 bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                      {link.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="my-4 max-w-full">
          <LogoutBtn />
        </div>
      </div>
    </>
  );
};

export default NavLink;
