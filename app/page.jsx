import SiteConfig from './config/site'
import { Hero, Verticla, Influncer, Gallery, SelfHelp, ArchiveSections, Publications, CTA, Heading } from './components/sections'

const Home = () => {
  return (
    <>
      <h1 className='hidden'>{SiteConfig.name}</h1>
      <Hero />
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <Heading title="Business" />
        <Verticla secid={4} />
        <Heading title="Companies & Influncers" />
        <Influncer />
        <Heading title="AI" />
        {/* <Publications /> */}
        <Verticla secid={7} />
      </div>
      {/* <Gallery /> */}
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <CTA />
        <Heading title="Self Help" />
        <SelfHelp />
        <Heading title="Articles" />
        <ArchiveSections />
      </div>
    </>
  )
}

export default Home