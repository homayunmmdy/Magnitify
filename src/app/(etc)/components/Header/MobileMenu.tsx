import { MenuTypes } from "@/types/entities";
import Link from "next/link";

const MobileMenu = ({ pathname, nav }: MenuTypes) => {
  return (
    <nav className="fixed left-0 right-0 top-[110px] z-[50] mx-auto w-[94%] rounded-xl border-2 border-indigo-700 shadow-xl backdrop-blur-md md:w-[92%]">
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
  );
};

export default MobileMenu;
