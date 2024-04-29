import React from 'react'

const Gallery = () => {
    return (
        <div className='bg-indigo-500 p-6'>
            <div className=" mx-auto  flex items-center">
                <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
                    <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
                        <div className="relative overflow-hidden w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                alt="کتاب"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/1.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>کتاب</h3>
                        </div>

                        <div className="relative overflow-hidden w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                alt="بیوگرافی"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/2.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>بیوگرافی</h3>

                        </div>
                        <div className="relative overflow-hidden w-full p-1 md:p-2">
                            <img
                                alt="برنامه نویسی"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                                src="/3.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>برنامه نویسی</h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden flex w-full sm:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="پول و کسب و کار"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/4.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'> پول و کسب و کار</h3>
                        </div>
                        <div className="relative overflow-hidden w-1/2 p-1 md:p-2">
                            <img
                                alt="بهبود خود"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/5.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>بهبود خود</h3>
                        </div>
                        <div className="relative overflow-hidden w-1/2 p-1 md:p-2">
                            <img
                                alt="هوش مصنوعی"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="/6.jpg"
                            />
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>هوش مصنوعی</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery