import {
  MainSec,
  PostsSec,
  SingleCardSec,
  VerticalPostsSec,
} from "@/etc/components/sections";
import { LinearAds } from "@/etc/components/ads";

const DemoPage = () => {
  return (
    <>
      <div className="w-[94%] md:w-[92%] mx-auto pt-2">
        <MainSec />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec />
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds />
          </div>
        </div>
        <SingleCardSec />
        <VerticalPostsSec />
      </div>
    </>
  );
};

export default DemoPage;
