import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

const HomePageHead = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("home");
  return (
    <div className="flex justify-center w-full flex-col items-center pt-10">
      <h1 className="font-libertine text-3xl">{t("name")}</h1>
      <p className="font-libertine text-lg">{t("description")}</p>
    </div>
  );
};

export default HomePageHead;
