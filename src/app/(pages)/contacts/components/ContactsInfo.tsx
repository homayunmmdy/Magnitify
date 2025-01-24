import SiteConfig from "@/config/site";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const ContactsInfo = () => {
  return (
    <div className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0">
      <span className="mb-4 block text-base font-semibold text-indigo-500">
        Contacts
      </span>
      <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
        Contact with us
      </h2>
      <p className="text-base leading-relaxed">
        If you have any question and feedback contact with us
      </p>
      <p className="mb-9 text-base leading-relaxed">{SiteConfig.description}</p>
      <div className="mb-8 flex w-full max-w-[370px] gap-3">
        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-indigo-500 sm:h-[70px] sm:max-w-[70px]">
          <FaPhone size={24} />
        </div>
        <div className="w-full">
          <h4 className="mb-1 text-xl font-bold">Phone Number</h4>
          <p className="text-sm sm:text-base">{SiteConfig.phoneNumber}</p>
        </div>
      </div>
      <div className="mb-8 flex w-full max-w-[370px] gap-3">
        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-indigo-500 sm:h-[70px] sm:max-w-[70px]">
          <TfiEmail size={24} />
        </div>
        <div className="w-full">
          <h4 className="mb-1 text-xl font-bold">Email Address</h4>
          <p className="text-sm sm:text-base">{SiteConfig.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
