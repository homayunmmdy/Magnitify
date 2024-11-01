"use client";
import Logo from "@/../public/static/Image/logo.png";
import { Button, Input } from "@/components";
import { EMAIL_API_URL } from "@/etc/config/apiConstants";
import SiteConfig from "@/etc/config/stie";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emails: "",
  });

  const handler = new FormHandler(setFormData, EMAIL_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      <footer className="w-full">
        <div className="mx-auto w-[94%] md:w-[92%]">
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-14">
            <div className="relative col-span-full flex h-96 flex-col items-center justify-center gap-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-6 xl:col-span-3 xl:w-72">
              <Link
                href="/"
                className="flex justify-center lg:justify-start"
                title={SiteConfig.name}
              >
                <div className="flex flex-nowrap items-center gap-4">
                  <Image
                    src={Logo}
                    width={60}
                    height={60}
                    title={SiteConfig.name}
                    alt={SiteConfig.name}
                  />
                  <span className="text-2xl font-bold">{SiteConfig.name}</span>
                </div>
              </Link>
              <p className="text-center">{SiteConfig.description}</p>

              <div className="flex gap-3 sm:justify-center">
                <Link
                  title="Github"
                  href="https://github.com/homayunmmdy"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
                >
                  <LuGithub size={20} color="6A3FEA" />
                </Link>
                <Link
                  title="Instagram"
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
                >
                  <FaInstagram size={20} color="6A3FEA" />
                </Link>
                <Link
                  title="Linkedin"
                  href="www.linkedin.com/in/homayunmmdy"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
                >
                  <FaLinkedinIn size={20} color="6A3FEA" />
                </Link>
                <Link
                  title="Youtube"
                  href="https://youtube.com/@thehomayunmmdy"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
                >
                  <IoLogoYoutube size={20} color="6A3FEA" />
                </Link>
              </div>
            </div>

            <div className="col-span-full block text-center min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16 xl:pl-5 xl:text-left">
              <p className="mb-9 text-lg font-bold">
                تماس بگیرید
              </p>
              <ul className="gap-6transition-all grid duration-500">
                <li>homayoun763@gmail.com</li>
                <li>+922 4003 487</li>
              </ul>
            </div>
            <div className="col-span-full block min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16">
              <p className="mb-9 text-center text-lg font-bold xl:text-left">
                لینک های سریع
              </p>
              <div className="flex gap-6 max-xl:justify-center xl:gap-12">
                <ul className="grid gap-6 transition-all duration-500">
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/"
                    >
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/FAQs"
                    >
                      سوالات متدوال
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/privacy_policy"
                    >
                      سیاست حفظ حریم خصوصی
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/tickets/new"
                    >
                      تیکت جدید
                    </Link>
                  </li>
                </ul>
                <ul className="grid gap-6 transition-all duration-500">
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/contribution"
                    >
                      مشارکت ها
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/about"
                    >
                      درباره ما{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/contacts"
                    >
                      تماس باما
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link-hover link hover:text-indigo-700"
                      href="/time"
                    >
                      وقت
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-full block md:col-span-4 xl:col-span-3 xl:py-16">
              <p className="mb-9 text-center text-lg font-bold xl:text-left">
                لیست ایمیل
              </p>
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  style="w-full"
                  color="input-primary"
                  placeholder="ایمیل را وارد کنید.."
                  onChange={handler.trakeChange}
                  type="email"
                  id="emails"
                  name="emails"
                  value={formData.emails}
                />
                <Button
                  icon={<GrFormNextLink size={24} />}
                  title="سابسکرایب"
                  style="rounded-full"
                  color="btn-primary"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-center">
            <span className="text-sm">
            تمام حقوق 

              <Link href="/">{" "}{SiteConfig.name}{" "}</Link>
              محفوظ است
              کپی رایت@ 
              {new Date().getFullYear()} 
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
