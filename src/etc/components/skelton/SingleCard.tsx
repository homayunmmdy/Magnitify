import Titr from "@/components/Titr";

const SingleCard = () => {
  return (
    <>
      <Titr
        title="Single Posts"
        item="text-center"
        style="mb-4 text-xl md:text-2xl lg:text-3xl"
      />
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <div className="skeleton h-80 w-2/4"></div>
        <div className="card-body">
          <div className="skeleton mt-2 h-7 w-full"></div>
          <div className="skeleton mt-2 h-7 w-full"></div>
          <div className="skeleton mt-2 h-7 w-3/5"></div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
