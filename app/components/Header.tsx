"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import SearchForm from "./SearchForm";

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
    <header className="shadow-[inset_0_-1px_3px_rgba(0,0,0,0.08)] md:shadow-none md:bg-white  bg-[#eaecf0]">
      <Container className="flex justify-between w-full items-center py-2 px-4">
        <div className="flex gap-2.5 w-full lg:w-fit justify-between md:justify-baseline items-center">
          <div className="flex gap-2.5  items-center">
            <Image
              className="hidden md:block w-[50px] h-[50px]"
              src="/images/central-featured-logo.png"
              width="50"
              height="50"
              alt=""
            />
            <div className="flex flex-col w-full ">
              <p className="font-libertine text-[17px]">{t("name")}</p>
              <p className="hidden md:block font-libertine text-[12px]">
                {t("slog")}
              </p>
            </div>
          </div>
          <SearchForm />
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
    </header>
  );
};

export default Header;

interface headerLinksType {
  name: string;
  href: string;
}
