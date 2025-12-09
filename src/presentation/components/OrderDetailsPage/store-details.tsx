import { Divider } from "antd";
import React from "react";
import PhoneCallingIcon from "../icons/PhoneCallingIcon";
import LocationOutlineIcon from "../icons/LocationOutlineIcon";
import ShopIcon from "../../static/shop.png";

const StoreDetails = () => {
  return (
    <div className="border border-[#E8E8E8] rounded-[8px] px-[15px] py-[11px] flex flex-col gap-[12px]">
      <div className="flex justify-between">
        <div className="flex gap-[8px]">
          <img src={ShopIcon} alt="" className="size-[16px] object-contain" />
          <div className="flex flex-col gap-[3px]">
            <div className="text-[#3E3E3E] text-sm font-bold leading-none">
              Cửa hàng Zone 1
            </div>
            <div className="text-[#3E3E3E] text-sm font-normal">
              Nguyễn Văn A
            </div>
          </div>
        </div>
        <div className="bg-[#EBEBEB] px-[8px] h-[22px] rounded-[100px] flex items-center justify-center">
          <div className="text-xs font-normal">Trống</div>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex gap-[4px] items-center">
        <PhoneCallingIcon className="size-[14px] text-[#848484]" />
        <div className="text-xs font-normal text-[#3E3E3E]">01243546456</div>
      </div>
      <div className="flex gap-[4px] items-center">
        <LocationOutlineIcon className="size-[14px] text-[#848484]" />
        <div className="text-xs font-normal text-[#3E3E3E]">
          123 Nguyễn Văn Linh, Quận 7, TP.HCM
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
