import React, { FC } from "react";

const Calendar: FC<Props> = ({ month, day }) => {
  return (
    <div className="relative">
      {/* Left */}
      <div className="absolute -top-[7px] left-[13%] h-[11.61px] w-[4px] rounded-lg bg-[#272C33]"></div>
      {/* Right */}
      <div className="absolute -top-[7px] right-[13%] h-[11.61px] w-[4px] rounded-lg bg-[#272C33]"></div>
      {/* Main */}
      <div
        className="h-fit w-[48px] overflow-hidden rounded-[4px]"
        style={{ boxShadow: "0px 3.62px 3.62px 0px #00000014" }}
      >
        <div className="flex h-[15px] items-center justify-center bg-secondary4">
          {/* Month number */}
          <div className="text-[9px] font-semibold text-white">Th{month}</div>
        </div>
        <div className="flex h-[32px] items-center justify-center bg-white">
          {/* Day number */}
          <div className="align-middle text-[21.74px] font-bold text-black">
            {day}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Calendar };

type Props = {
  month: number;
  day: number;
};
