import AdminNavLink from "./NavLink";

const AdminSidbar = () => {
  return (
    <>
      <div
        className="sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0"
      >
        <span className="absolute top-4 right-4 block cursor-pointer xl:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <div className="mx-[56px] mt-[50px] flex items-center">
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-indigo-700">
            Magnitify <span className="font-medium text-navy-700 dark:text-white">Admin</span>
          </div>
        </div>
        <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"></div>
        <AdminNavLink />
        <div className="flex justify-center">
          <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
            <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
                  fill="white"
                ></path>
                <path
                  d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="mt-16 flex h-fit flex-col items-center">
              <p className="text-lg font-bold text-white">Upgrade to PRO</p>
              <p className="mt-1 px-4 text-center text-sm text-white">
                Improve your development process and start doing more with
                Horizon UI PRO!
              </p>
              <a
                target="blank"
                className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
              >
                Upgrade to PRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidbar;