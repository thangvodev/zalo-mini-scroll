import React from "react";
import CoinIcon from "../../static/coin.png";

const HistoryList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <HitoryItem key={index} />
      ))}
    </div>
  );
};

const HitoryItem = () => {
  return (
    <div
      className="bg-white p-[12px] rounded-[12px] flex gap-[12px] justify-between"
      style={{ boxShadow: "0px 2px 4px 0px #C6D1D74F" }}
    >
      <div className="flex gap-[12px] items-center">
        <div className="size-[56px] rounded-[11.2px] bg-yellow1 p-[12px] shrink-0">
          <img src={CoinIcon} alt="" className="size-full object-contain" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[15px] font-bold">Đổi điểm thành công</div>
          <div className="text-xs text-gray5 font-normal">
            Nhận voucher{" "}
            <span className="text-blue4">Giảm 50k cho đơn hàng từ 500k</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="flex gap-[4px] items-center px-[6px] py-[4px]">
          <div className="text-yellow6 text-sm font-bold">-140</div>
          <img src={CoinIcon} alt="" className="size-[18px]" />
        </div>
        <div className="text-gray5 font-normal text-[11px] whitespace-nowrap">
          09:20, 27/07
        </div>
      </div>
    </div>
  );
};

export { HistoryList };
