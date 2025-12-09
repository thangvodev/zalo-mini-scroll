import React from "react";
import { FloatButtons } from "./float-buttons";
import StoreDetails from "./store-details";
import { Statistics } from "./statistics";

const Content = () => {
  return (
    <div className="px-[16px] py-[20px]">
      <div className="flex flex-col gap-[20px]">
        <StoreDetails />
        <Statistics />
      </div>
      <FloatButtons />
    </div>
  );
};

export default Content;
