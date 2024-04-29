import React from 'react'
import AdsSlider from './AdsSlider'
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
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                        Steps Back Into Coronavirus Spotlight</a>
                </div>
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                        Trump's Mistakes Became Biden's Big Breaks</a>
                </div>
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                        Many Americans 'Dissatisfied' With U.S.</a>
                </div>
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                        Trump's Mistakes Became Biden's Big Breaks</a>
                </div>
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                        Many Americans 'Dissatisfied' With U.S.</a>
                </div>
                <div className="">
                    <a href="#">
                        <div className="h-40 bg-cover text-center overflow-hidden"
                            // style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                            title="Woman holding a mug">
                        </div>
                    </a>
                    <a href="#"
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                        Steps Back Into Coronavirus Spotlight</a>
                </div>
            </div>
    
        </div>
    </div>
    )
}

export default SpecialSections