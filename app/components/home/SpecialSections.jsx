import React from 'react'
import SpecialSec from './SpecialSec'

const SpecialSections = () => {
    return (
        <div className="mx-auto p-5 sm:p-10 md:p-16 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-5">
                </div>
                <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <SpecialSec />
                </div>
            </div>
        </div>
    )
}

export default SpecialSections