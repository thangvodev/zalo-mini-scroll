import React, { FC } from "react";
import TagYellowIcon from "../../static/tag-yellow.png";
import TagBlueIcon from "../../static/tag-blue.png";

const PointsStatistics = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Tích điểm</div>
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-2">
        {data.map((item, index) => (
          <PointsStatisticsCard
            title={item.title}
            icon={item.icon}
            titleColor={item.titleColor}
            background={item.background}
            value={item.value}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const PointsStatisticsCard: TPointsStatisticsCard = ({
  background,
  icon,
  title,
  titleColor,
  value,
}) => {
  return (
    <div
      className="rounded-[12px] py-[12px] px-[16px] flex flex-col gap-[8px]"
      style={{ background: background }}
    >
      <div className="flex gap-[8px] items-center">
        <img src={icon} alt="" className="size-[34px] object-contain" />
        <div className="text-xs font-bold" style={{ color: titleColor }}>
          {title}
        </div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export { PointsStatistics };

type TPointsStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  titleColor: string;
  value: number;
}>;

const data = [
  {
    icon: TagYellowIcon,
    title: "Số điểm tích luỹ",
    titleColor: "#B89C00",
    value: 240,
    background: "#FFFCEB",
  },
  {
    icon: TagBlueIcon,
    title: "Số điểm đã sử dụng",
    titleColor: "#005AE0",
    value: 124,
    background: "#EBF3FF",
  },
];
