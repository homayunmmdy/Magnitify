import React from 'react'
import Hero from './components/home/Hero'
import PostsSec from './components/home/PostsSec'
import ArchiveSections from './components/home/ArchiveSections'
import Gallery from './components/home/Gallery'
import SpecialSections from './components/home/SpecialSections'
import SepcialSections2 from './components/home/SepcialSections2'
import Meta from './services/Meta'
import SiteConfig from './config/site'

const Home = () => {
  return (
    <>
      <Meta
        title={SiteConfig.name}
        description={SiteConfig.description}
        canonical="https://magnitify.vercel.app/"
      />

      <Hero />
      <div className='w-[97%] sm:w-[95%] md:w-[92%] mx-auto'>
        <PostsSec secid={4} />
        <SepcialSections2 />
        <PostsSec secid={7} />
      </div>
      <Gallery />
      <div className='w-[97%] sm:w-[95%] md:w-[92%] mx-auto'>
        <SpecialSections />
        
        <ArchiveSections />
      </div>
    </>
  )
}

export default Home