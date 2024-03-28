"use client";
import React, { useState } from "react";
import SiteConfig from "../../config/site";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("خطایی رخ داد. لطفاً بعداً دوباره امتحان کنید.");
    }
  };
  return (
    <div>
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden  px-6 py-24   sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
             عضویت در خبرنامه
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300">
            {SiteConfig.description}
          </p>
          {message && (
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300">
              {message}
            </p>
          )}
          <form
            className="mx-auto mt-10 flex max-w-md gap-x-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              ایمیل
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-xl ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="ایمیل"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-100 dark:text-gray-900 shadow-sm hover:bg-gray-900 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ارسال
            </button>
          </form>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6"></stop>
                <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
