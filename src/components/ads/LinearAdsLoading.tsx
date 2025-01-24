import Titr from "@/components/Titr";
import React from 'react'

const LinearAdsLoading: React.FC = () => {
  return (
    <>
      <Titr title="Ads Demo Page" item="text-center" />
      <div className="flex flex-col gap-4 mb-3">
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
      </div>
    </>
  );
};

export default LinearAdsLoading;
