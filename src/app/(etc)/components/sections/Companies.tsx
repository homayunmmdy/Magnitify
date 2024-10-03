import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiMongodb, SiVercel } from "react-icons/si";

const Companies = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 rounded-xl shadow-xl py-8 md:py-12 lg:py-28 m-4 border-2 border-indigo-400 hover:border-indigo-700">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Companies
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 py-5">
            The list of the companies that we work to make this happend
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <RiNextjsFill className="h-12 w-12 fill-current" />

              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <FaReact className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm">
                  Server and Client Components. Use hook.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <SiMongodb className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Database</h3>
                <p className="text-sm text-muted-foreground">
                  We Use mongodb to save your data
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <RiTailwindCssFill className="h-12 w-12 fill-current" />

              <div className="space-y-2">
                <h3 className="font-bold">Style</h3>
                <p className="text-sm text-muted-foreground">
                  we are using the tailwind css and daisyui to give you website
                  nice look for each components and themes
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <SiClerk className="h-12 w-12 fill-current" />

              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication using Clerk to have safe and beatfull style
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <SiVercel className="h-12 w-12 fill-current" />

              <div className="space-y-2">
                <h3 className="font-bold">Hosting</h3>
                <p className="text-sm text-muted-foreground">
                  For hosting we handle you hosting with free hobby plan of the
                  vercel but If you want more you must pay based on vercel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;