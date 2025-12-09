import React from 'react'

interface Props {
    title : string;
    children : React.ReactNode;
}

const ContentWrapper = ({title,children} : Props) => {
  return (
    <section className='border border-[#cef2e0] bg-[#f5fffa] p-2.5'>
        <header className='border border-[#a3bfb1] bg-[#cef2e0] py-1 px-2.5 font-bold mb-2.5'>
            {title}
        </header>
            {children}
    </section>
  )
}

export default ContentWrapper