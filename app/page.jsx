import React from "react";
import Newsletter from "./ui/home/Newsletter";
import MainSlider from "./ui/home/mainSec/MainSlider";
import NextMainSec from "./ui/home/mainSec/NextMainSec";
import PostSec from "./ui/layout/PostSec";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-12 lg:col-span-9 xl:col-span-7">
          <MainSlider />
        </div>

        <div className="col-span-12 sm:col-span-6  lg:col-span-3 xl:col-span-3">
          <div className=" h-full w-full">
            <NextMainSec />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-0 xl:col-span-2">
      <div id="pos-article-display-94687"></div>
        </div>
      </div>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
      <div className="col-span-0 md:col-span-2">
        <div id="pos-article-display-94698"></div>
      </div>

      <div className="col-span-12 md:col-span-8">
      <PostSec title="هوش مصنوعی" place="ai" />
      <div id="pos-article-display-94981"></div>
      <PostSec title="برنامه نویسی" place="programming" />
        <div id="pos-article-text-94402"></div>
      <PostSec title="اندرو تیت" place="andrew tate" />
        <div id="pos-article-display-94409"></div>
      <PostSec title="کتاب" place="books" />
      <div id="pos-article-display-94980"></div>
      </div>

      <div className="col-span-0 md:col-span-2">
        <div id="pos-article-display-94697"></div>
      </div>
    </div>
      <Newsletter />
    </div>
  );
};

export default Home;
