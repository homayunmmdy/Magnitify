import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrLink } from 'react-icons/gr'

const Gallery = () => {
    return (
        <div className='bg-indigo-500 py-6'>
            <div className=" w-[94%] md:w-[92%] mx-auto  flex items-center">
                <div className="m-1 flex flex-col sm:flex-row sm:flex-wrap md:-m-2">
                    <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
                        <Link href="#" title="Book" className="relative overflow-hidden w-full lg:w-1/2 p-2 md:p-3 rounded-lg">
                            <Image
                                alt="Book"
                                className="block h-full w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center"
                                src="/1.jpg"
                                width={315}
                                height={210}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>Book</h5>
                        </Link>

                        <Link href="#" title="Biography" className="relative overflow-hidden w-full lg:w-1/2 p-2 md:p-3 rounded-lg">
                            <Image
                                alt="Biography"
                                className="block h-full w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center"
                                src="/2.jpg"
                                width={315}
                                height={210}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>Biography</h5>
                        </Link>
                        <Link href="https://dev.to/homayunmmdy" title="Coding" className="relative overflow-hidden w-full p-2 md:p-3 rounded-lg">
                            <Image
                                alt="Coding"
                                className="block h-full w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center max-h-none lg:max-h-[1000px]"
                                src="/3.jpg"
                                width={645}
                                height={362}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>Coding</h5>
                        </Link>
                    </div>
                    <div className="relative overflow-hidden flex w-full sm:w-1/2 flex-wrap">
                        <Link href="#" title="Business" className="w-full overflow-hidden p-2 rounded-lg md:p-3">
                            <Image
                                alt="Business"
                                className="block h-full w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center"
                                src="/4.jpg"
                                width={645}
                                height={380}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>Business</h5>
                        </Link>
                        <Link href="#"  title="You" className="relative overflow-hidden sm:w-1/2 p-2 rounded-lg md:p-3">
                            <Image
                                alt="You"
                                className="block h-full  w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center"
                                src="/5.jpg"
                                width={315}
                                height={195}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>You</h5>
                        </Link>
                        <Link href="#" title="AI" className="relative overflow-hidden rounded-lg sm:w-1/2 p-2 md:p-3">
                            <Image
                                alt="AI"
                                className="block h-full w-full hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg object-cover object-center"
                                src="/6.jpg"
                                width={315}
                                height={195}
                            />
                            <h5 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-5 xs:text-xl md:text-3xl'>AI</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery