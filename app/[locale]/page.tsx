import CentralFeatured from "../components/templates/home/CentralFeatured";
import "../components/templates/home/home.css";
import HomePageHead from "../components/templates/home/HomePageHead";

const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
  return (
    <main>
      <HomePageHead params={params} />
      <CentralFeatured />
    </main>
  );
};

export default Home;
