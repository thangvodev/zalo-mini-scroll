import React from "react";
import UserImg from "../../static/user.png";

const UserCard = () => {
  return (
    <div
      className="bg-white rounded-[8px] px-[16px] py-[12px] flex gap-[12px] "
      style={{ boxShadow: "0px 4px 24px 0px #E6E6E633" }}
    >
      <img src={UserImg} alt="" className="size-[48px] rounded-[24px]" />
      <div className="flex flex-col gap-[2px]">
        <div className="text-[18px] font-semibold ">Hi Jason Nguyễn </div>
        <div className="text-sm font-normal">01234646</div>
      </div>
    </div>
  );
};

export { UserCard };
