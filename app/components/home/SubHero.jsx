import React from 'react'
import FormattedTimestamp from '@/app/services/FormattedTimestamp';
import Link from 'next/link';

const SubHero = ({ post }) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <>
            <Link href={`/Posts/${post._id}`} >
                <h2 className="py-3" >{post.title}</h2>
                <p className='flex justify-end'> <FormattedTimestamp timestamp={post.createdAt} options={options} /></p>
            </Link>
        </>
    )
}

export default SubHero