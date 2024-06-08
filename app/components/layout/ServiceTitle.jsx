import React from 'react'

const ServiceTitle = ({ title }) => {
    return (
        <>
            <div className=" bg-indigo-600 h-[280px] flex justify-center items-center" >
                <h2 className='text-white text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center'>{title}</h2>
            </div>
        </>
    )
}

export default ServiceTitle