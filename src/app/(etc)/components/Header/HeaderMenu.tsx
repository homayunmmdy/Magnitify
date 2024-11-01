import { MenuTypes } from "@/types/entities";
import Link from "next/link";

const HeaderMenu = ({ pathname, nav }: MenuTypes) => {
  return (
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
  );
};

export default HeaderMenu;
