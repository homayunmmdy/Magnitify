import Titr from "@/components/Titr";

const Vertical = () => {
  return (
    <div className=" mx-auto py-6">
      <Titr title="Vertical Posts" item="text-left" />
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        <div className="skeleton w-full h-[450px] rounded-md"></div>
        <div className="skeleton w-full h-[450px] rounded-md"></div>
        <div className="skeleton w-full h-[450px] rounded-md"></div>
        <div className="skeleton w-full h-[450px] rounded-md"></div>
      </div>
    </div>
  );
};

export default Vertical;
