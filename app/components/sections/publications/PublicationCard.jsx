import Link from 'next/link'
import React from 'react'

const PublicationCard = ({ publication }) => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <Link href={`/publication/${publication._id}`} className="px-10 pt-10">
                    <img
                        src={publication.imgurl}
                        title={publication.title}
                        alt={publication.title}
                        className="rounded-xl" />
                </Link>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{publication.title}</h2>
                    <p>{publication.description}</p>
                </div>
            </div>
        </>
    )
}

export default PublicationCard