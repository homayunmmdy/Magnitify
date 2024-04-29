import React from 'react'
import MainSec from './MainSec'
import NextMainSec from './NextMainSec'
import SubHero from './SubHeroSec'

const Hero = () => {
    return (
        <div className='bg-indigo-500 p-6'>
            <div className="grid grid-cols-12 md:px-7 gap-2">
                <div className="col-span-12 md:col-span-6 xl:col-span-4 order-2 md:order-1	">
                    <NextMainSec />
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-8 order-1 md:order-2">
                    <MainSec />
                </div>
            </div>
            <SubHero />
            <div id="pos-article-text-94696"></div>
        </div>
    )
}

export default Hero