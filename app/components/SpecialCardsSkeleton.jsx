import React from 'react'

const SpecialCardsSkeleton = () => {
    return (
        <div>
            <div className="flex items-start mb-3 pb-3">
                <div className="inline-block mr-3">
                    <div className="skeleton w-20 h-20  ml-3 rounded-xl">
                    </div>
                </div>
                <div className="text-sm">
                    <div className="text-gray-600 text-xs"> <div className="skeleton h-4 w-[20%]"></div></div>
                    <div className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <div className="inline-block mr-3">
                    <div className="skeleton w-20 h-20  ml-3 rounded-xl">
                    </div>
                </div>
                <div className="text-sm">
                    <div className="text-gray-600 text-xs"> <div className="skeleton h-4 w-[20%]"></div></div>
                    <div className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <div className="inline-block mr-3">
                    <div className="skeleton w-20 h-20  ml-3 rounded-xl">
                    </div>
                </div>
                <div className="text-sm">
                    <div className="text-gray-600 text-xs"> <div className="skeleton h-4 w-[20%]"></div></div>
                    <div className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialCardsSkeleton