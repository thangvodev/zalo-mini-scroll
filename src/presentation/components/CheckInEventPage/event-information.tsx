import React from "react";
import LocationIcon from "../../static/location-outline.png";
import ClockIcon from "../../static/clock.png";
import CalendarIcon from "../../static/calendar.png";
import { Divider } from "antd";

const EventInformation = () => {
  return (
    <div
      className="rounded-[8px] px-[12px] py-[14px] bg-white flex flex-col gap-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-base font-semibold">Thông tin HCP</div>
      <div className="text-base font-medium">
        BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px]">
          <img src={CalendarIcon} alt="" className="size-[16px]" />
          <div className="flex flex-col gap-[4px]">
            <div className="text-gray8 font-medium text-xs">Ngày tổ chức</div>
            <div className="text-sm font-medium">Thứ Năm, 12/12/2025</div>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <img src={ClockIcon} alt="" className="size-[16px]" />
          <div className="flex flex-col gap-[4px]">
            <div className="text-gray8 font-medium text-xs">Thời gian</div>
            <div className="text-sm font-medium">16:00 - 18:00</div>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <img src={LocationIcon} alt="" className="size-[16px]" />
          <div className="flex flex-col gap-[4px]">
            <div className="text-gray8 font-medium text-xs">Địa điểm</div>
            <div className="text-sm font-medium">
              Virtual - Trực tuyến qua Zoom
            </div>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-col">
        <div className="text-gray8 text-xs font-normal">Mã sự kiện</div>
        <div className="text-sm font-medium">HC-35-19062024</div>
      </div>
    </div>
  );
};

export { EventInformation };
