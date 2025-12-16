import React, { FC } from "react";
import ProjectSuccessIcon from "../../static/project-success.png";
import ProjectFailIcon from "../../static/project-fail.png";

const Projects = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Giá trị công trình</div>
      <div className="grid gap-x-[12px] gap-y-[8px] grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-2">
        {data.map((item, index) => (
          <ProjectsStatisticsCard
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

const ProjectsStatisticsCard: TProjectsStatisticsCard = ({
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

export { Projects };

type TProjectsStatisticsCard = FC<{
  background: string;
  icon: string;
  title: string;
  value: number;
}>;

const data = [
  {
    icon: ProjectSuccessIcon,
    title: "Thành công",
    value: 120,
    background: "#E1FAF2",
  },
  {
    icon: ProjectFailIcon,
    title: "Thất bại",
    value: 120,
    background: "#FDECEC",
  },
];
