import React, { FC } from "react";

const STATUS = {
  checkin: { label: "Đã checkin", bgColor: "#EEF5FC", color: "#6AAEF2" },
};

const StatusRender: TStatusRender = ({ status }) => {
  return (
    <div
      className="rounded-[24px] h-[21px] flex items-center justify-center px-[8px] w-fit"
      style={{ background: STATUS[status].bgColor }}
    >
      <div
        className="text-[11px] font-medium"
        style={{ color: STATUS[status].color }}
      >
        {STATUS[status].label}
      </div>
    </div>
  );
};

export { StatusRender };

type TStatus = "checkin";
type TStatusRender = FC<{ status: TStatus }>;
