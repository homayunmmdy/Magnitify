import SiteConfig from './config/site'
import { Hero, Verticla, Influncer, Gallery, SelfHelp, ArchiveSections, Publications, CTA } from './components/sections'

const Home = () => {
  return (
    <>
      <h1 className='hidden'>{SiteConfig.name}</h1>
      <Hero />
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <Verticla secid={4} />
        <Influncer />
        <Publications />
        <Verticla secid={7} />
      </div>
      <Gallery />
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <SelfHelp />
        <CTA />
        <ArchiveSections />
      </div>
    </>
  )
}

export default Home