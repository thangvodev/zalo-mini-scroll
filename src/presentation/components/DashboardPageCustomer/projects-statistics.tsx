import React, { FC } from "react";
import { Progress } from "../common/progress";
import StructureIcon from "../../static/structure.png";
import AreaIcon from "../../static/area.png";
import VerifiedIcon from "../../static/verified.png";

const ProjectStatistics = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">
        Thông tin công trình
      </div>
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
        <ProjectStatisticsSummaryCard
          background="linear-gradient(93.75deg, #3BEDB4 3.04%, #31CE9C 97.28%)"
          icon={VerifiedIcon}
          title="Số công trình đã xác minh"
          progress={70}
        />
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

const ProjectStatisticsSummaryCard: TProjectStatisticsCard = ({
  background,
  icon,
  title,
  progress,
}) => {
  return (
    <div
      className=" rounded-[12px] p-[12px] flex gap-[8px] justify-between"
      style={{ background: background }}
    >
      <div className="flex flex-col gap-[4px] flex-1">
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
        <div className="flex flex-col gap-[2px]">
          <div className="flex justify-between items-center">
            <div className="text-white flex-1 font-bold text-xs">
              Thành công
            </div>
            <div className="text-white flex-1 text-xl font-bold">38</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-white flex-1 font-bold text-xs">Thất bại</div>
            <div className="text-white flex-1 text-xl font-bold">7</div>
          </div>
        </div>
      </div>
      <Progress
        percent={progress}
        type="circle"
        size={48}
        circleTextColor="white"
        strokeWidth={10}
        strokeColor="white"
        trailColor="#F5F9FF99"
      />
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
    title: "Số công trình đã đăng ký",
    value: 45,
    background: "linear-gradient(93.75deg, #83C4FF 3.04%, #399EFC 97.28%)",
  },
  {
    icon: AreaIcon,
    title: "Tổng diện tích sàn (m2)",
    value: 12500,
    background: "linear-gradient(93.75deg, #E8CA1D 3.04%, #EA971B 97.28%)",
  },
];
