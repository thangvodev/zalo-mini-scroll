import React from "react";
import CheckMarkIcon from "../../static/checkmark.png";

const CheckinStatistics = () => {
  return (
    <div className="rounded-[8px] bg-yellow1 p-[14px] flex gap-[14px] items-center">
      <img src={CheckMarkIcon} alt="" className="size-[32px] object-contain" />
      <div className="flex flex-col gap-[2px]">
        <div className="text-gray7 font-normal text-sm">Tổng số checkin</div>
        <div className="text-lg font-bold">1234</div>
      </div>
    </div>
  );
};

export { CheckinStatistics };
