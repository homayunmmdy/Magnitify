import React from 'react'

const RecentPost = ({ post }) => {
    return (
        <>
            <a href={`/Posts/${post._id}`} className="relative flex flex-col sm:flex-row md:flex-col items-start gap-2">
                <img
                    src={post.imgurl}
                    alt={post.title}
                    className='mb-3 shadow-md rounded-lg  bg-slate-50 w-full sm:w-[17rem] sm:mb-0  xl:w-full'
                />
                <div className="order-1 sm:ml-6 xl:ml-0">
                    <h3 className="mb-1 text-slate-900 dark:text-slate-200"> {post.title}</h3>
                </div>

            </a>

        </>
    )
}

export default RecentPost