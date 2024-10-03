import Image from "next/image";
import Link from "next/link";

//@ts-ignore
const PostCard = ({ post }) => {
    return (
      <>
        <div className="card  bg-base-100 shadow-xl md:hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
          <Link href={`/posts/${post._id}`} >
          <figure className="px-5 pt-5">
            <Image
              src={post.imgurl}
              alt={post.title.slice(0,70)}
              width={662.172}
              height={372.469}
              className="rounded-xl aspect-video bg-gray-600 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">{post.title.slice(0,70).slice(0, 100)}</h2>
            <p>{post.description.slice(0, 60)}</p>
          </div>
          </Link>
        </div>
      </>
    );
  };
  
  export default PostCard;