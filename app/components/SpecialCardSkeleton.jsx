import React from 'react'

const SpecialCardSkeleton = () => {
    return (
        <>
            <div className="h-56 skeleton">
            </div>
            <div
                className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div
                    className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                    <div className="skeleton h-6 w-full"></div>
                </div>
                <p className="text-gray-700 text-xs mt-2">
                    <div className="skeleton h-4 w-full mb-3"></div>
                    <div className="skeleton h-4 w-[60%]"></div>
                </p>
            </div>
        </>
    )
}

export default SpecialCardSkeleton