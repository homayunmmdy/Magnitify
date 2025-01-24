"use client"
import useGetStats from "@/hooks/useGetStats";


const Stats = () => {
  const data = useGetStats();
  return (
    <div className="pt-12 sm:pt-20">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
          See What we have
        </h2>
        <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
          Here are list of the avaliables posts , sections and services in our website
        </p>
      </div>
    </div>
    <div className="mt-10 pb-12 sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
              <div
                className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r dark:border-gray-700">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                  Posts
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                  aria-describedby="item-1" id="starsCount">
                  {data.posts.length}
                </dd>
              </div>
              <div
                className="flex flex-col border-b border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r dark:border-gray-700">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                  Sections
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                  id="downloadsCount">
                  {data.sections.length}
                </dd>
              </div>
              <div
                className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l dark:border-gray-700">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                  Services
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                  id="sponsorsCount">
                  {data.services.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Stats;
