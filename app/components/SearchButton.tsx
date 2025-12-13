"use client";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
  onChange?: (value: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
}

const SearchButton = ({ className, onSubmit, value = "", onChange, inputRef }: Props) => {
  const t = useTranslations("main");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="border w-full focus:border-[#36c] bg-white focus-visible:border-[#36c] pl-8 pr-3 py-1 ring-1 ring-inset ring-transparent border-[#72777d] bg-[url('/images/searchIcon.svg')] bg-no-repeat bg-[10px_center] bg-[length:16px_16px]"
        type="text"
        placeholder={`${t("search")}...`}
        name="search"
        value={value}
        onChange={handleChange}
        aria-label="Search"
      />
      <button
        className="font-bold cursor-pointer px-3 bg-[#f8f9fa] text-[#202122] border border-[#72777d] ml-[-1px]"
        type="submit"
        aria-label={t("search")}
      >
        {t("search")}
      </button>
    </form>
  );
};

export default SearchButton;