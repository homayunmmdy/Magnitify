import LogoSec from "@/components/LogoSec";
import SiteConfig from "@/etc/config/stie";
import CopyRight from "./CopyRight";
import EmailListForm from "./EmailListForm";
import FooterLinks from "./FooterLinks";
import FooterMedia from "./FooterMedia";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="mx-auto w-[94%] md:w-[92%]">
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-14">
            <div className="relative col-span-full flex h-96 flex-col items-center justify-center gap-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-6 xl:col-span-3 xl:w-72">
              <LogoSec siteName={SiteConfig.name} />
              <p className="text-center">{SiteConfig.description}</p>
              <FooterMedia />
            </div>
            <FooterLinks />
            <div className="col-span-full block md:col-span-4 xl:col-span-3 xl:py-16">
              <p className="mb-9 text-center text-lg font-bold xl:text-left">
                لیست ایمیل
              </p>
              <EmailListForm />
            </div>
          </div>
        </div>
        <CopyRight siteName={SiteConfig.name} />
      </footer>
    </>
  );
};

export default Footer;
