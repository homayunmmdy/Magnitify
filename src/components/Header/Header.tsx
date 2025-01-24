"use client";
import { ThemeToggle } from "@/components";
import SiteConfig from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import GitHubBtn from "./GitHubBtn";
import HamburgerIcon from "./HamburgerIcon";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="navbar fixed left-0 right-0 top-0 z-[50] border-b-2 border-indigo-400 bg-base-100 shadow-xl transition-all hover:border-indigo-700">
        <div className="navbar mx-auto max-w-7xl">
          <div className="navbar-start lg:w-[30%]">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-indigo-700 md:text-2xl lg:text-3xl">
                <Link href="/" title={SiteConfig.name}>
                  {SiteConfig.name}
                </Link>
              </h1>
              <SearchInput className="hidden lg:block" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex lg:w-[50%] lg:justify-end">
            <HeaderMenu pathname={pathname} nav={nav} />
          </div>
          <div className="navbar-end gap-3 lg:w-[20%]">
            <ThemeToggle />
            <GitHubBtn link={SiteConfig.github} />
          </div>
        </div>
      </header>
      {isOpen && <MobileMenu pathname={pathname} nav={nav} />}
    </>
  );
};

export default Header;
