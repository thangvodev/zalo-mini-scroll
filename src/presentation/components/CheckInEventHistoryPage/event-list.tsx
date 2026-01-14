import React from "react";
import { StatusRender } from "./status";
import ClockIcon from "../../static/clock.png";
import FlagIcon from "../../static/flag.png";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {Array.from({ length: 10 }).map((_, i) => (
        <Event key={i} />
      ))}
    </div>
  );
};

const Event = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-[12px] py-[10px] px-[12px] flex flex-col gap-[8px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      onClick={() => navigate("/checkin")}
    >
      <StatusRender status="checkin" />
      <div className="flex gap-[4px] items-center">
        <div className="text-sm font-medium">Thu Hồng</div>
        <div className="text-gray6 font-normal text-xs">(012343454)</div>
      </div>
      <div className="flex gap-[4px] items-center">
        <img src={ClockIcon} alt="" className="size-[20px]" />
        <div className="text-gray7 font-normal text-xs">
          Checkin: 12:00, 12/12/2024
        </div>
      </div>
      <div className="flex gap-[4px] items-center">
        <img src={FlagIcon} alt="" className="size-[20px]" />
        <div className="text-gray7 font-normal text-xs">
          Sự kiện Doctor event 1
        </div>
      </div>
    </div>
  );
};

export { EventList };
