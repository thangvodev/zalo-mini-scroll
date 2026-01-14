import { Divider } from "antd";
import React from "react";
import GuestImg from "../../static/user.png";
import StethoscopeIcon from "../../static/stethoscope.png";
import LocationIcon from "../../static/location-outline.png";

const GuestInformation = () => {
  return (
    <div
      className="bg-white flex flex-col gap-[12px] rounded-[8px] px-[12px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-base font-semibold">Thông tin HCP</div>
      <Divider className="m-0" />
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px] items-center py-[10px]">
          <img
            src={GuestImg}
            alt=""
            className="size-[32px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-[2px]">
            <div className="text-sm font-medium">BS.CKII Nguyễn Văn An</div>
            <div className="text-gray8 font-normal text-xs">02343546456</div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] rounded-[10px] flex flex-col gap-[12px] p-[12px]">
          <div className="flex gap-[8px]">
            <img src={StethoscopeIcon} alt="" className="size-[16px]" />
            <div className="flex flex-col gap-[4px]">
              <div className="text-gray8 font-medium text-xs">Chuyên khoa</div>
              <div className="text-sm font-medium">Tai Mũi Họng - Dị Ứng</div>
            </div>
          </div>
          <div className="flex gap-[8px]">
            <img src={LocationIcon} alt="" className="size-[16px]" />
            <div className="flex flex-col gap-[4px]">
              <div className="text-gray8 font-medium text-xs">Nơi công tác</div>
              <div className="text-sm font-medium">
                Bệnh viện Đa khoa Trung ương Thái Nguyên
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GuestInformation };
