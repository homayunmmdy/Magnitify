"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import SearchButton from "./SearchButton";

const SearchForm = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleMobileSearchClick = () => {
    setIsMobileSearchOpen(true);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
  };

  const t = useTranslations("main");

  return (
    <>
      {/* Mobile Search Icon */}
      <button
        className="md:hidden w-10 h-10 flex items-center justify-center"
        onClick={handleMobileSearchClick}
        aria-label={t("search")}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>search</title>
          <g fill="#54595d">
            <path d="M12.2 13.6a7 7 0 1 1 1.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8" />
          </g>
        </svg>
      </button>
      {/* Mobile Form when it is open */}
      {isMobileSearchOpen && (
        <div className="md:hidden sm:max-w-xl mx-auto fixed top-0 left-0 right-0 z-50 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.08)] bg-[#eaecf0] p-2  flex items-center gap-2">
          {/* Back Button */}
          <button
            type="button"
            onClick={handleMobileSearchClose}
            className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900"
            aria-label="Close search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <SearchButton className="flex w-full" onSubmit={handleSubmit} />
        </div>
      )}
      {/* Desktop Search Form */}
      <SearchButton
        className="ml-4 hidden md:flex w-[474px]"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default SearchForm;
