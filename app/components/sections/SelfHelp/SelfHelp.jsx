import React from 'react'
import NextSelfHelp from './NextSelfHelp'
import MainSelfHelp from './MainSelfHelp'

const SelfHelp = () => {
    return (
        <div className="py-5 sm:py-10 md:py-16 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-5">
                    <MainSelfHelp />
                </div>
                <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <NextSelfHelp />
                </div>
            </div>
        </div>
    )
}

export default SelfHelp