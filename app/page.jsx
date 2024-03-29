import React from "react";
import Newsletter from "./ui/home/Newsletter";
import MainSlider from "./ui/home/mainSec/MainSlider";
import NextMainSec from "./ui/home/mainSec/NextMainSec";
import OneSections from "./ui/home/mainSec/OneSections";
import PostSec from "./ui/layout/PostSec";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 md:px-7 gap-2">
        <div className="col-span-12 lg:col-span-9 xl:col-span-10">
          <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
            <div className="col-span-12 sm:col-span-8">
              <MainSlider />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <NextMainSec />
            </div>
          </div>
        </div>
        <div className="col-span-0 hidden lg:grid lg:col-span-2">
         <OneSections />
        </div>
      </div>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-0 hidden md:grid md:col-span-2">
          <div id="pos-article-display-94698"></div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <PostSec title="پول" secid="3" />
          <div id="pos-article-display-94687"></div>
          <PostSec title="هوش مصنوعی" secid="4" />
          <div id="pos-article-display-94981"></div>
          <PostSec title="برنامه نویسی" secid="5" />
          <div id="pos-article-text-94402"></div>
          <PostSec title="اندرو تیت" secid="6" />
          <div id="pos-article-display-94409"></div>
          <PostSec title="کتاب" secid="7" />
          <div id="pos-article-display-94980"></div>
        </div>

        <div className="col-span-0 hidden md:grid md:col-span-2">
          <div id="pos-article-display-94697"></div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
