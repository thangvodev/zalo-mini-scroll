import { Divider } from "antd";
import React from "react";
import TicketIcon from "../../static/ticket.png";
import PaletteIcon from "../../static/palette.png";

const RequestStatistics = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Đăng ký</div>
      <RequestStatisticsCard />
    </div>
  );
};

const RequestStatisticsCard = () => {
  return (
    <div className="border border-gray2 rounded-[12px] px-[16px] py-[12px] bg-white flex items-center gap-[24px]">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col gap-[12px] flex-1">
            <div className="flex items-center gap-[4px]">
              <img
                src={item.icon}
                alt=""
                className="size-[18px] object-contain"
              />
              <div className="text-gray5 text-xs font-bold">{item.title}</div>
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
          {index !== data.length - 1 ? (
            <Divider type="vertical" className="m-0 h-[60px]" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export { RequestStatistics };

const data = [
  {
    icon: TicketIcon,
    title: "Số phiếu yêu cầu",
    value: "240",
  },
  {
    icon: PaletteIcon,
    title: "Số yêu cầu màu sơn",
    value: "240",
  },
];
