import { MenuTypes } from "@/types/entities";
import Link from "next/link";
import SearchInput from "./SearchInput";

const MobileMenu = ({ pathname, nav }: MenuTypes) => {
  return (
    <nav className="fixed left-0 right-0 top-[120px] z-[50] mx-auto w-[94%] rounded-xl border-2 border-indigo-700 shadow-xl backdrop-blur-md md:w-[92%]">
      <ul className="my-3 flex flex-col items-center gap-4 bg-inherit p-2 shadow lg:hidden">
        <li className="flex items-center gap-3" key={`mobile_menu_item_starter`}>
          <SearchInput className="block w-full lg:hidden" />
        </li>

        {nav?.map((item) => {
          return (
            <li key={`mobile_menu_item_${item.id}`} className="mx-1 w-3/4">
              {pathname === item.link ? (
                <Link
                  href={item.link}
                  title={item.link}
                  className="block w-full rounded-xl bg-indigo-700 p-2 text-center text-white hover:bg-indigo-700"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  className="block w-full rounded-xl border-2 border-indigo-700 p-2 text-center"
                  href={item.link}
                  title={item.link}
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
