import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import HomePageHead from "./components/HomePageHead";
import './components/home.css'
import CentralFeatured from "./components/CentralFeatured";

const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <main>
      <HomePageHead params={params}/>
      <CentralFeatured />
    </main>
  );
};

export default Home;
