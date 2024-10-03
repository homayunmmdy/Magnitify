const MainSec = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <div className="group cursor-pointer">
          <div className=" overflow-hidden rounded-md transition-all hover:scale-105   ">
            <div className="skeleton h-80 w-full"></div>
          </div>
          <div className="mt-4">
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="group cursor-pointer">
          <div className=" overflow-hidden rounded-md transition-all hover:scale-105   ">
            <div className="skeleton h-80 w-full"></div>
          </div>
          <div className="mt-4">
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSec;
