import React from "react";
import CoinIcon from "../../static/coin.png";

export const UserPointCard = () => {
  return (
    <div
      className="bg-white rounded-[12px] px-[12px] py-[14px] flex items-center gap-[12px]"
      style={{
        boxShadow:
          "var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100)",
      }}
    >
      <img src={CoinIcon} alt="" className="size-[32px]" />
      <div className="flex flex-col gap-[4px]">
        <div className="text-gray5 font-normal text-xs">Điểm của bạn</div>
        <div className="text-xl font-bold">1234</div>
      </div>
    </div>
  );
};
