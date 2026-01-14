import React from "react";
import { UserCard } from "./user-card";
import { CheckinStatistics } from "./checkin-statistics";
import { Extensions } from "./extensions";

const Content = () => {
  return (
    <div className="size-full relative">
      <div
        className="absolute top-0 inset-x-0 h-[40px]"
        style={{
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
      />
      <div className="px-[16px] flex flex-col gap-[16px] pt-[10px] z-10 relative">
        <UserCard />
        <CheckinStatistics />
        <Extensions />
      </div>
    </div>
  );
};

export default Content;
