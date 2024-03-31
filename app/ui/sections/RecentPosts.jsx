import React from 'react'
import AllPost from "../home/AllPost";
import RecentPost from './RecentPost';


const RecentPosts = async () => {
    const data = await AllPost();
    const posts = data.posts.slice(-3);

    return (
        <div>
            <div class=" w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                <h4 class="font-semibold text-custom-4 text-dark mb-7.5">
                    پست های اخیر
                </h4>
                {posts && (
                    <div class="flex flex-col gap-7.5">
                        {posts.map((Post, _index) => (
                            <RecentPost id={_index} key={_index} data={Post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecentPosts