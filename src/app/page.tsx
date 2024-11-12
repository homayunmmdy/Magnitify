import { LinearAds } from "@/etc/components/ads";
import { MainSec, PostsSec } from "@/etc/components/sections";
import VerticalPosts from "@/etc/components/sections/VerticalPosts";

const DemoPage = () => {
  return (
    <>
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
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
        <div className="mt-5' mx-auto w-[94%] md:w-[92%]">
          <PostsSec amount={-3} id={3} title="تجربه من" />
        </div>
      </div>
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-3">
          <VerticalPosts amount={-2} id={8} title="تاریخ" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <PostsSec amount={-6} id={4} title="کسب و کار" />
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
        <div className="mt-5' mx-auto w-[94%] md:w-[92%]">
          <PostsSec amount={-3} id={5} title="بیوگرافی" />
        </div>
      </div>
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
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
