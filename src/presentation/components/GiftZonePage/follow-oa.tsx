import React from "react";
import { Card } from "./card";
import { Button } from "../common/button";
import { StarOutlined } from "@ant-design/icons";

export const FollowOA = () => {
  return (
    <Card size="medium">
      <div className="text-base font-normal text-center">
        Theo dõi Zalo OA Giftzone để nhận thêm nhiều ưu đãi hấp dẫn từ nhãn hàng
      </div>
      <Button
        text={
          <div className="flex gap-[10px] items-center">
            <div className="text-green6 text-base font-medium">
              Mời bạn quan tâm OA Giftzone
            </div>
            <StarOutlined className="text-[20px] text-green6" />
          </div>
        }
        className="bg-white rounded-[8px] py-[14px] flex items-center justify-center border-[1.5px] border-green6"
      />
    </Card>
  );
};
