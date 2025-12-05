import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import SearchButton from "./SearchButton";

const Header = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("main");
  return (
    <div className="flex justify-between w-full items-center py-2 px-4">
      <div className="flex gap-2.5 items-center">
        <Image
          className="hidden md:block w-[50px] h-[50px]"
          src="/images/central-featured-logo.png"
          width="50"
          height="50"
          alt=""
        />
        <div>
          <p className="font-libertine text-[17px]">{t("name")}</p>
          <p className="hidden md:block font-libertine text-[12px]">
            {t("slog")}
          </p>
        </div>
        <SearchButton />
      </div>
      <ul className="hidden md:flex gap-4">
        {headerLinks.map((item) => (
          <li key={item.name}>
            <Link className="link" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

interface headerLinksType {
  name: string;
  href: string;
}
const headerLinks: headerLinksType[] = [
  {
    name: "Github",
    href: "https://github.com/homayounmmdy",
  },
  {
    name: "Create account",
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
];
