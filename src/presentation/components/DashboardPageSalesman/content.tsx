import React from "react";
import { ProjectStatistics } from "./projects-statistics";
import { Subscriptions } from "./subscriptions";
import { Projects } from "./projects";
import { PaletteRequests } from "./palette-requests";
import { TrainingRequests } from "./training-request";
import { ProjectRequests } from "./project-requests";
import { Orders } from "./orders";

const Content = () => {
  return (
    <div className="px-[16px] py-[12px] flex flex-col gap-[20px]">
      <ProjectStatistics />
      <Subscriptions />
      <Projects />
      <PaletteRequests />
      <TrainingRequests />
      <ProjectRequests />
      <Orders />
    </div>
  );
};

export default Content;
