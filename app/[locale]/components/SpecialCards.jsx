"use client"
import React from 'react'
import useDataFetching from './useDataFetching';
import FormattedTimestamp from './FormattedTimestamp';
import SpecialCardsSkeleton from './SpecialCardsSkeleton';

const SpecialCards = () => {
    const { data, loading } = useDataFetching("fa/api/Posts", -3, 6);

    if (loading) {
        return <SpecialCardsSkeleton />
    }
    const options = {
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <div>
            {data?.map((post) => (
                <div className="flex items-start mb-3 pb-3">
                    <a href={`/Posts/${post._id}`} className="inline-block mr-3">
                        <div className="w-20 h-20 bg-cover bg-center ml-3 rounded-xl"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}>
                        </div>
                    </a>
                    <div className="text-sm">
                        <p className="text-gray-600 text-xs"><FormattedTimestamp timestamp={post.createdAt} options={options} /></p>
                        <a href={`/Posts/${post._id}`} className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                            {post.title}</a>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SpecialCards