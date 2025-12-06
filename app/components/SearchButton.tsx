"use client";

import { useTranslations } from "next-intl";

const SearchButton = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const t = useTranslations("main");

  return (
    <form className="ml-4 flex w-[474px]" onSubmit={handleSubmit}>
      <input
        className="border w-full focus:border-[#36c] focus-visible:border-[#36c] pl-8 pr-3 py-1 ring-1 ring-inset ring-transparent border-[#72777d] bg-[url('/images/searchIcon.svg')] bg-no-repeat bg-[10px_center] bg-[length:16px_16px]"
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
