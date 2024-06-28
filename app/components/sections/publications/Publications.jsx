"use client"
import useFetch from '@/app/hooks/useFetch'
import React from 'react'
import PublicationCard from './PublicationCard'
import PublicationsSkeleton from './PublicationsSkeleton'

const publications = () => {
    const { data , loading } = useFetch('/api/publications');
    const publicationsData = data?.slice(-4)
    if(loading) {
        return <PublicationsSkeleton />
    }
    return (
        <>
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {publicationsData?.map(publication => (
                        <PublicationCard publication={publication} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default publications