import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/templates/MainPage/Sidebar";
import WelcomeMessage from "@/app/components/templates/MainPage/WelcomeMessage";

const MainPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  return (
    <>
      <Header  />
      <Container className="flex gap-6">
        <div className="w-full md:w-5/6">
          <WelcomeMessage params={params} />
        </div>
        <div className="hidden md:block w-1/6">
          <Sidebar />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
