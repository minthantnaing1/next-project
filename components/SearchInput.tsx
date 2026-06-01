"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch] = useDebounce(search, 2000);

  useEffect(() => {
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = { ...currentQuery, search: debouncedSearch };

    const url = queryString.stringifyUrl({
      url: window.location.pathname,
      query: updatedQuery,
    });
    router.push(url);
  }, [debouncedSearch, router]);

  return (
    <Input
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}

export default SearchInput;
