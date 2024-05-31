import React from 'react'

const RecentPostSkeleton = () => {
    return (
        <>
            <div className=" w-full rounded-[10px] border border-indigo-100 p-4 sm:p-7">
                <div className="flex justify-center">
                    <div className="skeleton h-4 w-28 mb-3"></div>
                </div>
                <div className="relative flex flex-col sm:flex-row md:flex-col items-start gap-2">

                    <div className="flex flex-col gap-4 w-full mb-3">
                        <div className="skeleton h-32 w-full sm:mb-2"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mb-3">
                        <div className="skeleton h-32 w-full sm:mb-2"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mb-3">
                        <div className="skeleton h-32 w-full sm:mb-2"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentPostSkeleton