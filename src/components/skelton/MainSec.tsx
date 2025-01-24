import React from "react";
const MainSec: React.FC = () => {
  return (
    <div data-testid="mainGrid" className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <div data-testid="gridItem" className="group">
          <div className="overflow-hidden rounded-md transition-all hover:scale-105">
            <div className="skeleton h-80 w-full"  data-testid="skeletonLoader"></div>
          </div>
          <div className="mt-4">
            <div className="skeleton h-4 w-full" data-testid="skeletonLoader"></div>
          </div>
        </div>
      </div>
      <div data-testid="gridItem" className="col-span-12 md:col-span-6">
        <div className="group">
          <div className="overflow-hidden rounded-md transition-all hover:scale-105">
            <div className="skeleton h-80 w-full" data-testid="skeletonLoader"></div>
          </div>
          <div className="mt-4">
            <div className="skeleton h-4 w-full" data-testid="skeletonLoader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSec;
