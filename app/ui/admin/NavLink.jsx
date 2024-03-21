import { TiHome } from "react-icons/ti";
import { PiPhoneCallFill } from "react-icons/pi";
import { CgFeed } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa";

const links = [
  { name: " ادمین", href: "/admin", icon: TiHome },
  { name: "پست ها", href: "/admin/posts", icon: CgFeed },
  { name: " تماس باما", href: "/admin/contacts", icon: PiPhoneCallFill },
  { name: "خبرنامه", href: "/admin/newsletter", icon: FaRegNewspaper },
];
const AdminNavLink = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 gap-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li className="mt-0.5 w-full">
                {pathname === link.href ? (
                  <a
                    className="py-2.7 shadow-soft-xl p-1 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                    href={link.href}
                  >
                    <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </a>
                ) : (
                  <a
                    class="py-2.7 text-sm ease-nav-brand  p-1 my-0 flex items-center whitespace-nowrap px-4 transition-colors hover:bg-white"
                    href={link.href}
                  >
                    <div class="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#333" />
                    </div>
                    <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminNavLink;
