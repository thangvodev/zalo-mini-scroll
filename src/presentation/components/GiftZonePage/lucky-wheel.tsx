import React from "react";
import { Card } from "./card";
import { Button } from "../common/button";

const LuckyWheel = () => {
  return (
    <Card size="medium">
      <div className="text-base font-normal">
        Wow! Bạn được tặng 03 lượt quay may mắn từ Giftzone hôm nay!
      </div>
      <Button
        text={
          <div className="text-white text-base font-medium">
            Bấm quay để nhận quà ngay
          </div>
        }
        className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
      />
    </Card>
  );
};

export { LuckyWheel };
