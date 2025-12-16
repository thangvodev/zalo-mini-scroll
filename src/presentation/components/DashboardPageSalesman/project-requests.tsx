import React, { FC } from "react";
import StructureFilledIcon from "../../static/structure-filled-blue.png";

const ProjectRequests = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">
        Số lượng công ty đăng ký công trình
      </div>
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-1">
        {data.map((item, index) => (
          <ProjectRequestsStatisticsCard
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

const ProjectRequestsStatisticsCard: TProjectRequestsStatisticsCard = ({
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

export { ProjectRequests };

type TProjectRequestsStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  value: number;
}>;

const data = [
  {
    icon: StructureFilledIcon,
    title: "Số công trình",
    value: 18,
    background: "#EBF3FF",
  },
];
