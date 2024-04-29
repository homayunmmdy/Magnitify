import React from 'react'
import SpecialCard from './SpecialCard'

const SepcialSections2 = () => {
    return (
        <div>
            <div className=" p-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    <div className="sm:col-span-6 lg:col-span-5">
                    </div>
                    <div className="sm:col-span-6 lg:col-span-4">
                        <div className="flex items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="w-20 h-20 bg-cover bg-center ml-3"
                                    style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}>
                                </div>
                            </a>
                            <div className="text-sm">
                                <p className="text-gray-600 text-xs">Aug 18</p>
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                                    of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="w-20 h-20 bg-cover bg-center ml-3"
                                    style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}>
                                </div>
                            </a>
                            <div className="text-sm w-2/3">
                                <p className="text-gray-600 text-xs">Jan 18</p>
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                                    Munich </a>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="w-20 h-20 bg-cover bg-center ml-3"
                                    style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}>
                                </div>
                            </a>
                            <div className="text-sm">
                                <p className="text-gray-600 text-xs">Aug 18</p>
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                                    of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <a href="#" className="inline-block mr-3">
                                <div className="w-20 h-20 bg-cover bg-center ml-3"
                                    style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}>
                                </div>
                            </a>
                            <div className="text-sm w-2/3">
                                <p className="text-gray-600 text-xs">July 23</p>
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                                    Munich - UEFA Champions League </a>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-3"><SpecialCard /></div>
                </div>
            </div>
        </div>
    )
}

export default SepcialSections2