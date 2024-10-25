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
            <PostsSec amount={3} id={2} title="هوش مصنوعی"/>
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds />
          </div>
        </div>
        <PostsSec amount={4} id={3} title="کسب و کار"/>

      </div>
    </>
  );
};

export default DemoPage;
