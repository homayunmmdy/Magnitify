import WelcomeMessage from '@/app/components/templates/MainPage/WelcomeMessage'


const MainPage = ({ params }: { params: Promise<{ locale: string }> }) => {

  return (
    <div className='px-4'>
      <WelcomeMessage params={params}/>
    </div>
  )
}

export default MainPage