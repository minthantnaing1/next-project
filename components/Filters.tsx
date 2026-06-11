"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import queryString from "query-string";

function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  const handleFilter = (filterType: string) => {
    if (filter === filterType) {
      setFilter("");
    } else {
      setFilter(filterType);
    }

    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = {
      ...currentQuery,
      filter: filter === filterType ? "" : filterType,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      { skipEmptyString: true, skipNull: true },
    );
    router.push(url);
  };

  return (
    <div className="flex gap-4 p-2">
      <button
        onClick={() => handleFilter("react")}
        className={`px-4 py-2 w-[100px] text-white rounded ${filter === "react" ? "bg-(--main)" : "bg-(--tertiary)"}`}
      >
        React
      </button>
      <button
        onClick={() => handleFilter("vue")}
        className={`px-4 py-2 w-[100px] text-white rounded ${filter === "vue" ? "bg-(--main)" : "bg-(--tertiary)"}`}
      >
        Vue
      </button>
    </div>
  );
}

export default Filters;
