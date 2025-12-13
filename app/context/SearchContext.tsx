"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get initial search from URL
  const urlSearchQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [isInitialized, setIsInitialized] = useState(false);

  // Update URL when search changes
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      return;
    }

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery.trim()) {
        params.set("search", searchQuery.trim());
      } else {
        params.delete("search");
      }

      // Only update if the search actually changed
      if (searchQuery !== urlSearchQuery) {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [
    searchQuery,
    pathname,
    router,
    searchParams,
    isInitialized,
    urlSearchQuery,
  ]);

  // Update local state when URL changes (e.g., back button)
  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, clearSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
