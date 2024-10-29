import { LinearAds } from "@/etc/components/ads";
import { MainSec, PostsSec } from "@/etc/components/sections";

const DemoPage = () => {
  return (
    <>
      <div className="w-[94%] md:w-[92%] mx-auto pt-2">
        <MainSec />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec amount={-3} id={2} title="هوش مصنوعی" />
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds />
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
        <div className="w-[94%] md:w-[92%] mx-auto mt-5'">
          <PostsSec amount={-3} id={3} title="تجربه من" />
        </div>
      </div>
      <div className="w-[94%] md:w-[92%] mx-auto pt-2">
        <PostsSec amount={-6} id={4} title="کسب و کار" />
      </div>
      <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
        <div className="w-[94%] md:w-[92%] mx-auto mt-5'">
          <PostsSec amount={-3} id={5} title="بیوگرافی" />
        </div>
      </div>
      <div className="w-[94%] md:w-[92%] mx-auto pt-2">
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec amount={-3} id={6} title="پست های بیشتر" />
          </div>
          <div className="col-span-12 md:col-span-3">
            <div id="pos-article-display-101799"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
