import React from "react";
import { ProjectStatistics } from "./projects-statistics";
import { PointsStatistics } from "./points-statistics";
import { RequestStatistics } from "./requests-statistics";

const Content = () => {
  return (
    <div className="px-[16px] py-[12px] flex flex-col gap-[20px]">
      <ProjectStatistics />
      <PointsStatistics />
      <RequestStatistics />
    </div>
  );
};

export default Content;
