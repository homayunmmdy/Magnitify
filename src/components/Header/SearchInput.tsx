"use client";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Input from "../Input";

const SearchInput = ({className}: {className? : string | undefined}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const webURL = process.env.NEXT_PUBLIC_API_URL;
    const webURL = 'https://nexca.vercel.app/';
    const searchURL = `https://www.google.com/search?sitesearch=${webURL}&q=${encodeURIComponent(
      query
    )}`;
    window.open(searchURL, "_blank");
  };
  return (
    <form onSubmit={handleSearch} className={className}>
      <Input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={
          <FiSearch size={24} className="h-4 w-4 opacity-70" color="#4F46E5" />
        }
        style="my-2 w-full"
        color="input-primary"
      />
    </form>
  );
};

export default SearchInput;
