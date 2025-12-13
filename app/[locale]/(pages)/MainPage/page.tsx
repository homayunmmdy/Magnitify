import Container from "@/app/components/Container";
import FullPost from "@/app/components/FullArticle";
import Header from "@/app/components/Header";
import LinearNews from "@/app/components/LinearNews";
import Sidebar from "@/app/components/templates/MainPage/Sidebar";
import WelcomeMessage from "@/app/components/templates/MainPage/WelcomeMessage";

const MainPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  return (
    <>
      <Header />
      <Container className="flex gap-6">
        <div className="w-full md:w-5/6">
          <WelcomeMessage params={params} />
          <div className="md:flex md:gap-1">
            <div className="w-full md:w-3/5">
              <FullPost />
            </div>
            <div className="w-full md:w-2/5">
            <LinearNews />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/6">
          <Sidebar />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
