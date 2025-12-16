import React, { FC } from "react";
import ProjectSuccessIcon from "../../static/project-success.png";
import ProjectFailIcon from "../../static/project-fail.png";
import StatisticCardBg from "../../static/statistic-card-bg-2.svg";
import { Progress } from "../common/progress";

const Orders = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-lg font-bold text-[#413B3B]">Đặt hàng</div>
      <OrdersStatisticsCard />
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-2">
        {data.map((item, index) => (
          <OrdersStatusStatisticsCard
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

const OrdersStatisticsCard = () => {
  return (
    <div
      className="rounded-[12px] py-[12px] px-[10px] gap-[12px] flex flex-col relative h-[134px] overflow-hidden"
      style={{
        background: `linear-gradient(262.76deg, #FF8B18 3.23%, #FF9F41 100%)`,
      }}
    >
      <img
        src={StatisticCardBg}
        alt=""
        className="absolute left-0 top-0 w-full object-cover"
      />
      <div
        className="bg-[#FFA87933] rounded-[24px] h-[25px] flex items-center justify-center px-[8px] w-fit"
        style={{
          backdropFilter: "blur(4px)",
          boxShadow: "0px 4px 12px 0px #0000000A",
        }}
      >
        <div className="text-white text-sm font-bold">Doanh số</div>
      </div>
      <div className="flex gap-[40px] items-center">
        <Progress
          percent={70}
          type="circle"
          size={72}
          circleTextColor="white"
          strokeWidth={10}
          strokeColor="white"
          trailColor="#F5F9FF99"
        />
        <div className="flex flex-col flex-1 gap-[8px]">
          {data2.map((item, index) => (
            <div
              className="flex items-center justify-between gap-[8px]"
              key={index}
            >
              <div className="flex gap-[6px] items-center">
                <div
                  className="size-[8px] rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-white text-xs font-normal">
                  {item.label}
                </div>
              </div>
              <div className="text-white text-xl font-semibold">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrdersStatusStatisticsCard: TOrdersStatusStatisticsCard = ({
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
      <div className="flex gap-[6px] items-center">
        <img src={icon} alt="" className="size-[28px] object-contain" />
        <div className="text-xs font-normal text-gray6">{title}</div>
      </div>
      <div className="text-2xl font-bold text-[#3C403A]">{value}</div>
    </div>
  );
};

export { Orders };

type TOrdersStatusStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  value: number;
}>;

const data = [
  {
    icon: ProjectSuccessIcon,
    title: "Công trình bán hàng thành công",
    value: 120,
    background: "#E1FAF2",
  },
  {
    icon: ProjectFailIcon,
    title: "Công trình bán hàng thất bại",
    value: 120,
    background: "#FDECEC",
  },
];

const data2 = [
  {
    color: "#FFFFFF",
    label: "Thực đạt",
    value: 12324000,
  },
  {
    color: "#FFE75C",
    label: "Kế hoạch",
    value: 14000000,
  },
];
