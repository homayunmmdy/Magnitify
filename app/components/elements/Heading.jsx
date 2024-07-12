import React from 'react'

const Heading = ({ title }) => {
    return (
        <>
            <h3 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-indigo-600">
                {title}
            </h3>
        </>
    )
}

export default Heading