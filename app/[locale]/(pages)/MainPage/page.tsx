import Header from "@/app/components/Header";
import WelcomeMessage from "@/app/components/templates/MainPage/WelcomeMessage";

const MainPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  return (
    <>
      <Header params={params}/>
      <div className="px-4">
        <WelcomeMessage params={params} />
      </div>
    </>
  );
};

export default MainPage;
