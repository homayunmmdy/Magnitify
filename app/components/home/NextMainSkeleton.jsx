import React from 'react'

const NextMainSkeleton = () => {
    return (
        <div>
            <div className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <p className='font-light my-2 text-lg leading-relaxed'>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4  w-[70%]"></div>
                    </p>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <div className="skeleton aspect-video h-20 w-full"></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <p className='font-light my-2 text-lg leading-relaxed'>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4  w-[70%]"></div>
                    </p>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <div className="skeleton aspect-video h-20 w-full"></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <p className='font-light my-2 text-lg leading-relaxed'>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4  w-[70%]"></div>
                    </p>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <div className="skeleton aspect-video h-20 w-full"></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <p className='font-light my-2 text-lg leading-relaxed'>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4  w-[70%]"></div>
                    </p>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <div className="skeleton aspect-video h-20 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextMainSkeleton