import React from "react";
import { Button } from "../common/button";

export const FloatButtons = () => {
  return (
    <div
      className="bg-white fixed bottom-0 inset-x-0 px-[16px] pt-[12px] pb-[24px] flex gap-[10px]"
      style={{ boxShadow: "0px -4px 24px 0px #CACBD740" }}
    >
      <Button
        text={<div className="text-red4 text-sm font-bold">Thất bại</div>}
        className="bg-red1 h-[41px] rounded-[4px]"
        style={{ boxShadow: "0px 2px 0px 0px #F9B4B4" }}
      />
      <Button
        text={<div className="text-white text-sm font-bold">Tiếp nhận</div>}
        className="h-[41px] rounded-[4px]"
        style={{
          boxShadow: "0px 2px 0px 0px #04977F",
          background:
            "linear-gradient(270deg, #2DC28D 0%, #1CA47D 54.86%, #16B18D 100%)",
        }}
      />
    </div>
  );
};
