import React from 'react'
import Hero from './components/Hero'
import PostsSec from './components/PostsSec'
import ArchiveSections from './components/ArchiveSections'
import Gallery from './components/Gallery'
import SpecialSections from './components/SpecialSections'
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