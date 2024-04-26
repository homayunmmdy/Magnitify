import React from 'react'

const Main = ({post}) => {
    return (
        <>
            <a href={`/Posts/${post._id}`} className='grid grid-cols-12  gap-4 md:gap-8'>

                <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                    <img src={post.imgurl}
                            alt={post.title}
                            className="w-full h-[450px] object-cover rounded-md"
                        />
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-7 grid items-center'>
                    <section className='py-4'>
                        <h1 className="text-5xl font-light text-black mb-6 sm:text-6xl md:text-7xl tracking-wide racking-wide leading-loose">
                           {post.title}
                        </h1>
                        <p className='leading-10 font-medium'>
                            {post.description}
                        </p>
                    </section>
                </div>
            </a>
        </>
    )
}

export default Main