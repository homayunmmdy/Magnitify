import React from 'react'

const SubHero = ({ post }) => {
    function formatTimestamp(timestamp) {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        };

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString("fa-IR", options);

        return formattedDate;
    }

    const createdDateTime = formatTimestamp(post.createdAt);
    return (
        <><a href={`/Posts/${post._id}`} ><h2 className="py-3" >{post.title}</h2><p className='flex justify-end'>{createdDateTime}</p></a></>
    )
}

export default SubHero