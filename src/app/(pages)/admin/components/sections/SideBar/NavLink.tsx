import { Button } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgFeed } from "react-icons/cg";
import { GiTicket } from "react-icons/gi";
import { LuBookCopy, LuBookPlus } from "react-icons/lu";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { LogoutButton } from "../../elements";
import { FaTimeline } from "react-icons/fa6";
import { VscGraphScatter } from "react-icons/vsc";

const links = [
  { name: "Admin", href: "/admin", icon: TiHome },
  { name: "Posts", href: "/admin/posts", icon: CgFeed },
  { name: "New Post", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "Text Adv", href: "/admin/textadv", icon: RiAdvertisementLine },
  { name: "Services", href: "/admin/services", icon: SiCloudflarepages },
  { name: "Sections", href: "/admin/sections", icon: TbNewSection },
  { name: "New book", href: "/admin/publications/new", icon: LuBookPlus},
  { name: "books", href: "/admin/publications", icon: LuBookCopy},
  { name: "Emails", href: "/admin/emails", icon: MdOutlineMail },
  { name: "Contributions", href: "/admin/contribution/new", icon: VscGraphScatter },
  { name: "TimeLine", href: "/admin/time/new", icon: FaTimeline },
  { name: "Tickets", href: "/admin/tickets", icon: GiTicket },
  { name: "Contacts", href: "/admin/contacts", icon: PiPhoneCallFill },
];
const NavLink: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="items-center block w-auto h-full overflow-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 gap-2">
          {links.map((link, index) => {
            const LinkIcon = link.icon;
            return (
              <li className="mt-0.5 w-full" key={index}>
                {pathname === link.href ? (
                  <Link
                    className="py-2.7 shadow-soft-xl p-1 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-indigo-700 hover:bg-indigo-600 text-white px-4 font-semibold  transition-colors"
                    href={link.href}
                  >
                    <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="py-2.7 text-sm ease-nav-brand  p-1 my-0 flex items-center whitespace-nowrap px-4 hover:text-white hover:bg-indigo-500 transition-colors rounded-xl"
                    href={link.href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-700 bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="max-w-full my-4">
          <LogoutButton />
        </div>
        <Link href="/admin/master" className="max-w-full my-4">
          <Button
            type="button"
            removeDefaultStyle={true}
            color={null}
            style="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
            title="Become Master Editor"
          />
        </Link>
      </div>
    </>
  );
};

export default NavLink;
