import Link from 'next/link';
import { FormatTime } from '../../layout';

const VerticalSection = ({ post }) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <>
            <Link href={`/Posts/${post._id}`} className="relative w-full flex items-end justify-start text-left bg-cover bg-center h-[450px] rounded-md"
               title={post.title} style={{ backgroundImage: `url(${post.imgurl})` }}
            >
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                </div>
                <main className="p-5 z-10">
                    <h4 className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        {post.title}
                    </h4>
                </main>
            </Link>
        </>
    )
}

export default VerticalSection