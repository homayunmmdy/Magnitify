import { FullHoverAnimation } from "@/components";
import { features } from "@/config/data";
import React from "react";
import Feature from "./Feature";

const Features: React.FC = () => {
  return (
    <>
      <div className="mx-auto my-10 max-w-7xl px-4">
        <div>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:text-center">
            <span className="mb-4 flex rounded-lg bg-[#144BCC] px-2 text-sm font-semibold uppercase leading-7 text-white lg:mb-8">
              Key Features
            </span>
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
              Enhanced
              <FullHoverAnimation text="Content Managemnt" />
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => {
                return <Feature data={feature} key={feature.id}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
