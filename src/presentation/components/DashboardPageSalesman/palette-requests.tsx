import React, { FC } from "react";
import InboxIcon from "../../static/inbox.png";
import ApprovedIcon from "../../static/approved.png";
import RejectIcon from "../../static/reject.png";

const PaletteRequests = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Yêu cầu mẫu màu</div>
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-3">
        {data.map((item, index) => (
          <PaletteRequestsStatisticsCard
            title={item.title}
            icon={item.icon}
            background={item.background}
            value={item.value}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const PaletteRequestsStatisticsCard: TPaletteRequestsStatisticsCard = ({
  background,
  icon,
  title,
  value,
}) => {
  return (
    <div
      className="rounded-[12px] p-[12px] flex items-center flex-col gap-[6px]"
      style={{ background: background }}
    >
      <img src={icon} alt="" className="size-[28px] object-contain" />
      <div className="text-xs font-normal text-gray6">{title}</div>
      <div className="text-2xl font-bold text-[#3C403A]">{value}</div>
    </div>
  );
};

export { PaletteRequests };

type TPaletteRequestsStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  value: number;
}>;

const data = [
  {
    icon: InboxIcon,
    title: "Nhận được",
    value: 18,
    background: "#FFFCEB",
  },
  {
    icon: ApprovedIcon,
    title: "Tiếp nhận",
    value: 120,
    background: "#E1FAF2",
  },
  {
    icon: RejectIcon,
    title: "Từ chối",
    value: 120,
    background: "#FDECEC",
  },
];
