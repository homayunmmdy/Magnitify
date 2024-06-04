import SiteConfig from './config/site'
import { Hero, Verticla, Influncer, Gallery, SelfHelp, ArchiveSections } from './components/sections'
import { Meta } from './components/layout'

const Home = () => {
  return (
    <>
      <Meta
        title={SiteConfig.name}
        description={SiteConfig.description}
        canonical="https://magnitify.vercel.app/"
      />
      <h1 className='hidden'>{SiteConfig.name}</h1>
      <Hero />
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <Verticla secid={4} />
        <Influncer />
        <Verticla secid={7} />
      </div>
      <Gallery />
      <div className='w-[94%] md:w-[92%] mx-auto'>
        <SelfHelp />
        <ArchiveSections />
      </div>
    </>
  )
}

export default Home