import FormatTime from "../../components/FormatTime";
interface Props {
  title: string;
  createdAt: string;
}
const NewsHead = ({ title, createdAt }: Props) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return (
    <>
        <div className="mx-auto w-[94%] px-4 py-8 md:w-[92%]">
      <div className="border-b-2 border-amber-400 bg-base-100">
          <h1 className="text-center text-4xl font-extrabold">
            {title}
          </h1>
          <p className="my-3 text-center text-lg">
            <FormatTime
              timestamp={createdAt}
              options={options as Intl.DateTimeFormatOptions}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsHead;
