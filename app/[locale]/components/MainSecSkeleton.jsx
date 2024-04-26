import React from 'react'

const MainSecSkeleton = () => {
    return (
        <div className='grid grid-cols-12  gap-4 md:gap-8'>
            <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                <div className="skeleton h-[450px] w-full"></div>
            </div>
            <div className='col-span-12 md:col-span-6 xl:col-span-7 grid items-center'>
                <section className='py-4'>
                    <h1 className="text-5xl font-light text-black mb-6 sm:text-6xl md:text-7xl tracking-wide racking-wide leading-loose">
                        <div className="skeleton h-6 mb-4 w-full"></div>
                        <div className="skeleton h-6 mb-4 w-full"></div>
                        <div className="skeleton h-6 mb-4 w-[60%]"></div>
                    </h1>
                    <p className='leading-10 font-meduium'>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4 mb-4 w-full"></div>
                        <div className="skeleton h-4 mb-4 w-[60%]"></div>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default MainSecSkeleton