import React, { FC } from "react";
import StructureIcon from "../../static/structure.png";
import AreaIcon from "../../static/area.png";

const ProjectStatistics = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Tổng quan</div>
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-2">
        {data.map((item, index) => (
          <ProjectStatisticsCard
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

const ProjectStatisticsCard: TProjectStatisticsCard = ({
  background,
  icon,
  title,
  value,
}) => {
  return (
    <div
      className="rounded-[12px] p-[12px] flex gap-[8px] flex-col"
      style={{ background: background }}
    >
      <div className="flex gap-[8px] items-center">
        <div
          className="size-[34px] rounded-[24px] shrink-0 flex items-center justify-center bg-[#BAEFFF33]"
          style={{
            backdropFilter: "blur(4px)",
            boxShadow: "0px 4px 12px 0px #0000000A",
          }}
        >
          <img src={icon} alt="" className="size-[16px] object-contain" />
        </div>
        <div className="text-white text-xs font-bold">{title}</div>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};

export { ProjectStatistics };

type TProjectStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  value?: number;
  progress?: number;
}>;

const data = [
  {
    icon: StructureIcon,
    title: "Công trình nhận được",
    value: 45,
    background: "linear-gradient(93.75deg, #83C4FF 3.04%, #399EFC 97.28%)",
  },
  {
    icon: AreaIcon,
    title: "Công ty đăng ký",
    value: 24,
    background: "linear-gradient(93.75deg, #E8CA1D 3.04%, #EA971B 97.28%)",
  },
];
