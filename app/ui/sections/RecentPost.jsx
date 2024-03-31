import React from 'react'

const RecentPost = ({ post }) => {
    return (
        <div>
            <a href={`/Posts/${post._id}`} class="group flex gap-6.5">
                <div class="max-w-[70px] w-full h-17.5 rounded-full">
                    <img
                        src={post.imgurl}
                        alt={post.title} />
                </div>
                <div>
                    <h5 class="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary">
                        {post.title}
                    </h5>
                </div>
            </a>
        </div>
    )
}

export default RecentPost