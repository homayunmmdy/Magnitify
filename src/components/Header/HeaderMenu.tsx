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
                title={item.name}
                className="rounded-xl bg-amber-700 text-white hover:bg-amber-700"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                className="rounded-xl border-2 border-base-100 hover:border-amber-700 hover:bg-base-100 hover:text-amber-700"
                href={item.link}
                title={item.name}
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
