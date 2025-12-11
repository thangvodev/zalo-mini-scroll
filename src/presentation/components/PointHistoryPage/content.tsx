import React from "react";
import { UserPointCard } from "./user-point-card";
import { HistoryTabs } from "./tabs";

const Content = () => {
  return (
    <div className="p-[16px] flex flex-col gap-[12px]">
      <UserPointCard />
      <HistoryTabs />
    </div>
  );
};

export default Content;
