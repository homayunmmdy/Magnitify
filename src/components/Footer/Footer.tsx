import SiteConfig from "@/config/site";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <CopyRight siteName={SiteConfig.name} />
      </footer>
    </>
  );
};

export default Footer;
