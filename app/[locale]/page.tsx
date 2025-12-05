import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { use } from "react";
const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("home");
  const Languages = [
    {
      id: 1,
      name: "English",
      code: "/en",
    },
    {
      id: 2,
      name: "Français",
      code: "/fr",
    },
    {
      id: 3,
      name: "Deutsch",
      code: "/de",
    },
    {
      id: 4,
      name: "Português",
      code: "/pt",
    },
    {
      id: 5,
      name: "Español",
      code: "/sp",
    },
    {
      id: 6,
      name: "Italiano",
      code: "/it",
    },
    {
      id: 7,
      name: "Русский",
      code: "/ru",
    },
    {
      id: 8,
      name: "हिंदी",
      code: "/in",
    },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero min-h-screen bg-base-200 pt-8">
        <div className="hero-content text-center">
          <div className="max-w-md flex justify-center flex-col">
            <h1 className="text-5xl font-bold text-white">{t("title")}</h1>
            <p className="py-6 text-white">{t("description")}</p>
            <details className="dropdown max-w-10 flex justify-center cursor-pointer items-center mx-auto bg-blue-700 rounded-lg">
              <summary className="m-1 relative flex">
                <svg
                  className="h-5 w-5 fill-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                  <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
                </svg>
              </summary>
              <ul className="absolute inset-0 mx-auto my-auto p-2 shadow menu dropdown-content rounded-lg z-[1] bg-gray-800 rounded-box  max-h-[calc(100vh-10rem)] w-56 overflow-y-auto ">
                {Languages.map((item) => (
                  <div key={item.id}>
                    <Link href={item.code} className="">
                      <li className="hover:bg-gray-500 rounded-lg p-2 text-white">
                        {item.name}
                      </li>
                    </Link>
                  </div>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
