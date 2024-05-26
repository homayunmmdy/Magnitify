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
      <PostsSec secid={4} />
      <SepcialSections2 />
      <PostsSec secid={7} />
      <Gallery />
      <SpecialSections />
      <ArchiveSections />
    </>
  )
}

export default Home