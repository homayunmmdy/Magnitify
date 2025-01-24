import { PostsCashType } from "@/types/CashTypes";
import Image from "next/image";
import Link from "next/link";

const MainItem = ({ post }: { post: PostsCashType }) => {
  return (
    <article className="col-span-12 md:col-span-6">
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-md transition-all hover:scale-105">
          <Link
            className="relative block aspect-video"
            href={`/posts/${post._id}`}
            title={post.title.slice(0, 60)}
          >
            <Image
              src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
              alt={post.title}
              title={post.title.slice(0, 60)}
              width={500}
              height={270}
              className="h-full w-full bg-gray-600"
            />
          </Link>
        </div>
        <header>
          <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
            <Link href={`/posts/${post._id}`} title={post.title.slice(0, 60)}>
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {post.title.slice(0, 60)}
              </span>
            </Link>
          </h2>
        </header>
      </div>
    </article>
  );
};

export default MainItem;
