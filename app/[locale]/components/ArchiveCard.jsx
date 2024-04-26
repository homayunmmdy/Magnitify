import React from 'react'

const ArchiveCard = ({ post }) => {
    return (
        <>
            <a
                href={`/Posts/${post._id}`}
                className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="p-2 flex justify-center">
                    <a href="#">
                        <img className="rounded-md aspect-video"
                            src={post.imgurl}
                            alt={post.title}
                            loading="lazy" />
                    </a>
                </div>

                <div className="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                                {post.title}
                            </h5>
                        </a>

                        <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all truncate">
                            {post.description}
                        </p>
                    </div>
                </div>

            </a>
        </>
    )
}

export default ArchiveCard