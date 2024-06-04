import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='bg-indigo-500 py-6'>
            <div className=" w-[94%] md:w-[92%] mx-auto  flex items-center">
                <div className="m-1 flex flex-col sm:flex-row sm:flex-wrap md:-m-2">
                    <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
                        <div className="relative overflow-hidden w-full lg:w-1/2 p-1 md:p-2">
                            <Image
                                alt="Book"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/1.jpg"
                                width={315}
                                height={210}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>Book</h5>
                        </div>

                        <div className="relative overflow-hidden w-full lg:w-1/2 p-1 md:p-2">
                            <Image
                                alt="Biography"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/2.jpg"
                                width={315}
                                height={210}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>Biography</h5>
                        </div>
                        <div className="relative overflow-hidden w-full p-1 md:p-2">
                            <Image
                                alt="Coding"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                                src="/3.jpg"
                                width={645}
                                height={362}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>Coding</h5>
                        </div>
                    </div>
                    <div className="relative overflow-hidden flex w-full sm:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="Business"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/4.jpg"
                                width={645}
                                height={380}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>Business</h5>
                        </div>
                        <div className="relative overflow-hidden sm:w-1/2 p-1 md:p-2">
                            <Image
                                alt="You"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/5.jpg"
                                width={315}
                                height={195}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>You</h5>
                        </div>
                        <div className="relative overflow-hidden sm:w-1/2 p-1 md:p-2">
                            <Image
                                alt="AI"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/6.jpg"
                                width={315}
                                height={195}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>AI</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery