import React from 'react'
import AdsSlider from './AdsSlider'
import SpecialSec from './SpecialSec'
const adsData = [
    {
        id: 3,
        adsId: "pos-article-display-94697"
    },
    {
        id: 4,
        adsId: "pos-article-display-94697"
    },
    {
        id: 5,
        adsId: "pos-article-display-94697"
    },
]
const SpecialSections = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

                <div className="sm:col-span-5">
                    <AdsSlider ads={adsData} />
                </div>

                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">


                    <SpecialSec />
                </div>

            </div>
        </div>
    )
}

export default SpecialSections