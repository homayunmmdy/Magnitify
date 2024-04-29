import React from 'react'
import SpecialCard from './SpecialCard'
import SpecialCards from './SpecialCards'
import AdsSlider from './AdsSlider'

const SepcialSections2 = () => {
    return (
        <div>
            <div className=" p-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    <div className="sm:col-span-6 lg:col-span-5">
                        <AdsSlider />
                    </div>
                    <div className="sm:col-span-6 lg:col-span-4">
                        <SpecialCards />
                    </div>
                    <div className="sm:col-span-12 lg:col-span-3"><SpecialCard /></div>
                </div>
            </div>
        </div>
    )
}

export default SepcialSections2