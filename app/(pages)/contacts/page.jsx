"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "../../config/site";
import Circles from "../../ui/contacts/Circles";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/Contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("داده ها ارسال نشد");
      }

      const data = await response.json();
      setNotification(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setNotification("داده ها ارسال نشد");
    }
  };
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
              {notification && (
                <div role="alert" className="alert alert-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{notification}</span>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="اسم"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-stroke bg-white text-black dark:border-dark-3 dark:text-dark-6 text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="آدرس ایمیل"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-stroke bg-white text-black dark:border-dark-3 dark:text-dark-6 text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="پیام"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-stroke bg-white text-black dark:border-dark-3 dark:text-dark-6 text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-700 p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                  >
                    ارسال
                  </button>
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#3056D3"
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
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="block mb-4 text-base font-semibold text-primary">
                تماس با ما
              </span>
              <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                با ما در تماس باشید
              </h2>
              <p className="text-base leading-relaxed text-body-color ">
                سوال , نظر های خود را با ما به اشتراک بگذارید
              </p>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                {SiteConfig.description}
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_941_17577)">
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_941_17577">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    شماره تماس
                  </h4>
                  <p className="text-base text-body-color ">487 4003 0922</p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    ایمیل آدرس
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    homayunmmdy@gmail.com
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    homayon763@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
