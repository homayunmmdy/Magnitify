"use client"
import { POST_API_URL } from '@/app/config/apiConstants';
import useGetSection from '@/app/hooks/useGetSection';
import Link from 'next/link';

const MainSelfHelp = () => {
    const { data } = useGetSection(POST_API_URL, -1, 9);

    return (
        <div>
            {data?.map((post, _index) => (
                <div key={post._id}>
                    <Link href={`/Posts/${post._id}`}>
                        <div className="bg-cover text-center overflow-hidden min-h-80"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}
                        >
                        </div>
                    </Link>
                    <div
                        className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <h3 href={`/Posts/${post._id}`}
                                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">{post.title}</h3>
                            <p className="text-gray-700 text-base mt-2">
                                {post.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainSelfHelp