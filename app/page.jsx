import React from 'react'
import Hero from './components/home/sections/Hero'
import PostsSec from './components/home/section/PostsSec'
import ArchiveSections from './components/home/sections/ArchiveSections'
import Gallery from './components/home/sections/Gallery'
import SpecialSections from './components/home/SpecialSections'
import SepcialSections2 from './components/SepcialSections2'

const Home = () => {
  return (
    <>
      <Hero />
      <PostsSec secid={4}/>
      <SepcialSections2 />
      <PostsSec secid={7}/>
      <Gallery />
      <SpecialSections />
      <ArchiveSections />
    </>
  )
}

export default Home