import Image from "next/image";

//@ts-ignore
const MainItem = ({ post }) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-md transition-all hover:scale-105">
          <a
            className="relative block aspect-video"
            href={`/posts/${post._id}`}
            title={post.title.slice(0,60)}
          >
            <Image
              src={post.imgurl}
              alt={post.title}
              title={post.title.slice(0,60)}
              width={500}
              height={270}
              className="h-full w-full bg-gray-600"
            />
          </a>
        </div>
        <div className="">
          <div>
            <h2 className="leading mt-4 text-lg font-bold leading-9">
              <a
                href={`/posts/${post._id}`}
                title={post.title.slice(0,120)}
              >
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                  {post.title.slice(0,120)}
                </span>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
