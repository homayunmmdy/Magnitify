"use client"
import SiteConfig from "@/app/config/site";
import Logo from "@/public/static/Image/logo.png";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 navbar bg-base-100 z-[50] transition-all w-[94%] md:w-[92%] mx-auto rounded-xl shadow-xl my-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <button aria-label="close and open menu" className="btn btn-ghost lg:hidden">
              <svg
                onClick={toggleMenu}
                className="h-6 w-6 lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <Link href="/" className="flex items-center gap-2 flex-nowrap" >
            <Image src={Logo} width={40} height={40} title={SiteConfig.name} alt={SiteConfig.altImgName} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-fuchsia-500">
              {SiteConfig.name}
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3 items-center">
            {nav?.map((item) => {
              return (
                <li key={item.id} className="mx-1">
                  {pathname == item.link ? <Link href={item.link} className="bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl">{item.name}</Link> :
                    <Link className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl" href={item.link}>{item.name}</Link>}
                </li>
              )
            })}
            {!user ? (<>
              <li className="mx-1">
                <Link href="/sign-in" className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl">Login</Link>
              </li>
              <li className="mx-1">
                <Link href="/sign-up" className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl">Sign Up</Link>
              </li>
            </>) : (
              <> <li className="mx-1">
                <Link href="/user-profile" className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl">Profile</Link>
              </li></>
            )
            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="m-1">
            <Link title="subscribe" className="border-2 border-blue-700	 rounded-xl	text-indigo-700 hover:text-white font-medium flex p-3 bg-base-100  hover:bg-indigo-700 hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200 w-13" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728" target="_blank">Subscribe</Link>
          </div>
        </div>
      </header>
      {isOpen && (
        <ul className="flex gap-4 items-center justify-center flex-col my-3 p-2 shadow lg:hidden bg-inherit pt-[56px]">
          {nav?.map((item) => {
            return (
              <li key={item.id} className="mx-1 w-3/4">
                {pathname === item.link ? <Link href={item.link} className="p-2 bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl block w-full text-center">{item.name}</Link> :
                  <Link className='p-2 bg-white rounded-xl block w-full text-center' href={item.link}>{item.name}</Link>}
              </li>
            )
          })}
          {!user ? (<>
            <li className="mx-1 w-3/4">
              <Link className='p-2 bg-white rounded-xl block w-full text-center' href="/sign-in">Login</Link>
            </li>
            <li className="mx-1 w-3/4">
              <Link className='p-2 bg-white rounded-xl block w-full text-center' href="/sign-up">Sign Up</Link>
            </li>
          </>) : (
            <> <li className="mx-1 w-3/4">
              <Link className='p-2 bg-white rounded-xl block w-full text-center' href="/user-profile">Profile</Link>
            </li></>
          )
          }
        </ul>
      )}
    </>
  );
};

export default Navbar;