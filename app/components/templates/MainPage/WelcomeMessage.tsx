import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const WelcomeMessage = ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("main");
  return (
    <div className="flex-center flex-col p-7 mt-4 bg-[#f9f9f9] border border-[#ddd]">
      {locale === "fa" ? (
        <Link title="به افغان پدیا خوش آمدید" href="/">
          <Image
            className="pt-1.5 pb-3.5"
            src="/images/fa_greeting.png"
            width={250}
            height={96}
            alt=""
          />
        </Link>
      ) : (
        <h2 className="font-[22.68px]">
          {t("welcome_to")}{" "}
          <Link className="link" title={t("name")} href="/">
            {t("name")}
          </Link>
        </h2>
      )}

      <p className="text-[13.3px]">{t("slog")}</p>
    </div>
  );
};

export default WelcomeMessage;
