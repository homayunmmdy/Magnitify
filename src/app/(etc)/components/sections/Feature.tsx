import { FeaturesType } from "@/types/entities";

const Feature = ({ data }: { data: FeaturesType }) => {
  return (
    <>
      <div className="relative pl-16" key={data.id}>
        <div className="text-base font-semibold leading-7 ">
          <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-700">
            {data.icon}
          </div>
          {data.title}
        </div>
        <div className="mt-2 text-base leading-7">{data.description}</div>
      </div>
    </>
  );
};

export default Feature;
