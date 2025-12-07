"use client";
import { useTranslations } from "next-intl";

interface Props {
  className? : string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchButton = ({ className , onSubmit}: Props) => {
  const t = useTranslations("main");

  return (
    <form className={`${className} `} onSubmit={onSubmit}>
      <input
        className="border w-full focus:border-[#36c] bg-white focus-visible:border-[#36c] pl-8 pr-3 py-1 ring-1 ring-inset ring-transparent border-[#72777d] bg-[url('/images/searchIcon.svg')] bg-no-repeat bg-[10px_center] bg-[length:16px_16px]"
        type="text"
        placeholder={`${t("search")}...`}
        name="search"
      />
      <button
        className="font-bold cursor-pointer px-3 bg-[#f8f9fa] text-[#202122] border border-[#72777d] ml-[-1px]"
        type="submit"
      >
        {t("search")}
      </button>
    </form>
  );
};

export default SearchButton;
