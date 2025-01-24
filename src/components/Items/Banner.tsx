import { Button } from "@/components";
import SiteConfig from "@/config/site";
import Link from "next/link";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 text-center sm:px-6 lg:px-8">
      <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight sm:mt-6">
        Welcome to
        <span className="border-b border-dotted border-slate-300 px-3">
          {SiteConfig.name}
        </span>
      </p>

      <div className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl">
        <span className="inline-block">
          Your
          <span className="relative whitespace-nowrap px-4 text-blue-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-500/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">lovely</span>
          </span>
        </span>
        <span className="inline-block">Admin panel</span>
      </div>

      <p className="mx-auto mt-9 inline-block max-w-2xl text-lg tracking-tight sm:mt-6">
        Explore the Nexca ecosystem and discover tools to elevate your workflow
        and achieve even more. Start now and unlock the potential of seamless
        content management!
      </p>

      <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-x-6 sm:gap-y-0">
        <Link href="/services/8">
          <Button
            removeDefaultStyle={true}
            color="btn-null"
            className="group relative isolation-auto z-10 mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-indigo-500 px-3 py-1 text-lg shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-indigo-500 before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
          >
            <IoArrowUpCircleSharp
              size={40}
              className="rotate-45 justify-end rounded-full p-1 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none"
            />{" "}
            How Nexca Work
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
