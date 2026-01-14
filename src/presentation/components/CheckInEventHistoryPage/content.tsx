import React from "react";
import { SearchBar } from "./search-bar";
import { EventList } from "./event-list";

const Content = () => {
  return (
    <div className="flex flex-col gap-[16px] p-[16px]">
      <div className="text-lg font-medium">Danh sách check-in</div>
      <SearchBar />
      <EventList />
    </div>
  );
};

export default Content;
