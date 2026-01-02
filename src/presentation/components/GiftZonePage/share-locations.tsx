import React from "react";
import { Card } from "./card";
import LocationOutlineIcon from "../icons/LocationOutlineIcon";
import { Switch } from "../common/switch";

const ShareLocation = () => {
  return (
    <Card direction="horizontal">
      <div className="flex gap-[8px] items-center">
        <div className="size-[40px] bg-[#F4F6F4] rounded-full flex justify-center items-center">
          <LocationOutlineIcon className="size-[20px] text-green5" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-xs font-medium">Cấp quyền vị trí</div>
          <div className="text-gray5 font-normal text-2xs">
            Để xác định vị trí hiện tại của bạn
          </div>
        </div>
      </div>
      <Switch color="#4CBA81" />
    </Card>
  );
};

export { ShareLocation };
