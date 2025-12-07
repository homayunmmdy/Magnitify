"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import Container from "./Container";

const Header = () => {
  const t = useTranslations("main");
  const headerLinks: headerLinksType[] = [
    {
      name: t("github"),
      href: "https://github.com/homayounmmdy",
    },
    {
      name: t("create_account"),
      href: "#",
    },
    {
      name: t("login"),
      href: "#",
    },
  ];
  return (
    <Container className="flex justify-between w-full items-center py-2 px-4">
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
      <ul className="hidden lg:flex gap-4">
        {headerLinks.map((item) => (
          <li key={item.name}>
            <Link className="link" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Header;

interface headerLinksType {
  name: string;
  href: string;
}
