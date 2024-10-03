"use client";
import { Button, Input, Textarea } from "@/components";
import { CONTACTS_API_URL } from "@/etc/config/apiConstants";
import SiteConfig from "@/etc/config/stie";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone, FaRegMessage } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Circles from "./components/Circle";

const ContactsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handler = new FormHandler(setFormData, CONTACTS_API_URL, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      {handler.isLoading && (
        <span className="absolute loading loading-ring loading-lg"></span>
      )}
      <section className="relative z-10 overflow-hidden py-12 sm:py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-4 justify-center lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 order-2 lg:order-1">
              <div className="relative p-8  rounded-lg shadow-2xl  sm:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      color="input-primary"
                      onChange={handler.trakeChange}
                      required={true}
                      style="w-full"
                      icon={<FaUser />}
                    />
                  </div>
                  <div className="mb-6">
                    <Input
                      type="email"
                      name="email"
                      color="input-primary"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handler.trakeChange}
                      required={true}
                      style="w-full"
                      icon={<TfiEmail />}
                    />
                  </div>
                  <div className="mb-6">
                    <Textarea
                      rows={6}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      color="textarea-primary"
                      onChange={handler.trakeChange}
                      required={true}
                      style="w-full"
                      icon={<FaRegMessage />}
                    />
                  </div>
                  <div>
                    <Button
                      title="send"
                      type="submit"
                      color="btn-primary"
                      style="p-3 w-full"
                    />
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#6366f1"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <Circles />
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <Circles />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12 order-1 lg:order-2">
              <div className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-indigo-500">
                  Contacts
                </span>
                <h2 className=" mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Contact with us
                </h2>
                <p className="text-base leading-relaxed  ">
                  If you have any question and feedback contact with us
                </p>
                <p className="text-base leading-relaxed   mb-9">
                  {SiteConfig.description}
                </p>
                <div className="mb-8 flex w-full max-w-[370px] gap-3">
                  <div className="bg-primary/5 text-indigo-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <FaPhone size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">Phone Number</h4>
                    <p className="text-sm sm:text-base">
                      {SiteConfig.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] gap-3">
                  <div className="bg-primary/5 text-indigo-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <TfiEmail size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">Email Address</h4>
                    <p className="text-sm sm:text-base">{SiteConfig.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
