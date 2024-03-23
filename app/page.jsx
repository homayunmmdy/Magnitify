import React from "react";
import Posts from "./ui/home/Posts";
import Slider from "./ui/home/Slider";
import Newsletter from "./ui/home/Newsletter";
import MainSlider from "./ui/home/mainSec/MainSlider";
import NextMainSec from "./ui/home/mainSec/NextMainSec";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-9 md:px-14">
        <div className="col-span-12 md:col-span-7">
          <MainSlider />
        </div>

        <div className="col-span-0 md:col-span-3">
          <div className=" h-full w-full">
            <NextMainSec />
          </div>
        </div>
        <div className="col-span-0 md:col-span-2">
        <div id="pos-article-display-94970"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
