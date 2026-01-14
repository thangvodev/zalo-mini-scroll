import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <SearchBarNoPopup
      placeholder="Tìm kiếm"
      className="rounded-[24px] h-[40px]"
      suffixIcon={<SearchIcon className="size-[15px] text-[#8E8E8E]" />}
    />
  );
};

export { SearchBar };
