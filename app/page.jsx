import React from "react";
import Dashboard from "./ui/home/Dashboard";
const Home = () => {
  return (
    <div>
      <div className="flex flex-row w-full px-8">
        <div className="flex-1 h-full"></div>
        <div className="shrink-0 h-full	w-[65%] ">
          <Dashboard />
        </div>
        <div className="flex-1 h-full"></div>
      </div>
      <div id="pos-article-display-94409"></div>
      <div id="pos-article-text-94402"></div>
    </div>
  );
};

export default Home;
