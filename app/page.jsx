import { ArchiveSections, CTA, Heading, Hero, Influncer, SelfHelp, Verticla } from './components/sections'
import SiteConfig from './config/site'

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