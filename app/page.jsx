import React from "react";
import Posts from "./ui/home/Posts";
import Slider from "./ui/home/Slider";
import Newsletter from "./ui/home/Newsletter";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-94698"></div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <Slider />
          <Posts />
          <div id="pos-article-display-94409"></div>
          <div id="pos-article-text-94402"></div>
          <Newsletter />
        </div>

        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-94697"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
