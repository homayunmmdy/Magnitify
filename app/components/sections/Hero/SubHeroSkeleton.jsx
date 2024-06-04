import React from 'react'

const SubHeroSkeleton = () => {
    return (
        <>
            <hr className="border-b-2 border-gray-300 my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div>
                    <h2 className="py-3" >
                        <div className="skeleton h-4 mb-3 w-full"></div>
                        <div className="skeleton h-4 w-[50%]"></div>
                    </h2>
                    <p className='flex justify-end'>
                        <div className="skeleton h-4 w-[30%]"></div>
                    </p>
                </div>
                <div>
                    <h2 className="py-3" >
                        <div className="skeleton h-4 mb-3 w-full"></div>
                        <div className="skeleton h-4 w-[50%]"></div>
                    </h2>
                    <p className='flex justify-end'>
                        <div className="skeleton h-4 w-[30%]"></div>
                    </p>
                </div>
                <div>
                    <h2 className="py-3" >
                        <div className="skeleton h-4 mb-3 w-full"></div>
                        <div className="skeleton h-4 w-[50%]"></div>
                    </h2>
                    <p className='flex justify-end'>
                        <div className="skeleton h-4 w-[30%]"></div>
                    </p>
                </div>
                <div>
                    <h2 className="py-3" >
                        <div className="skeleton h-4 mb-3 w-full"></div>
                        <div className="skeleton h-4 w-[50%]"></div>
                    </h2>
                    <p className='flex justify-end'>
                        <div className="skeleton h-4 w-[30%]"></div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SubHeroSkeleton