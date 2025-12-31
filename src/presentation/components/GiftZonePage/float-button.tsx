import React from "react";
import { Button } from "../common/button";

export const FloatButton = () => {
  return (
    <div
      className="bg-white sticky bottom-0 inset-x-0 px-[16px] pt-[12px] pb-[24px]"
      style={{ boxShadow: "0px -4px 24px 0px #A6A6A633" }}
    >
      <Button
        text={<div className="text-base font-medium text-white">Button</div>}
        className="bg-green6 rounded-[8px] py-[14px] flex-none w-full"
      />
    </div>
  );
};
