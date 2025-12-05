import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

const HomePageHead = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("home");
  return (
    <div className="flex-center w-full flex-col pb-1.5 pt-[40px]">
      <h1 className="font-libertine text-3xl">{t("name")}</h1>
      <p className="font-libertine text-lg">{t("description")}</p>
    </div>
  );
};

export default HomePageHead;
