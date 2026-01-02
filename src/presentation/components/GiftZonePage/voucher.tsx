import React, { FC } from "react";
import { Card } from "./card";
import { Divider } from "antd";
import { Button } from "../common/button";

const Voucher: TVoucher = ({ barCode, banner }) => {
  return (
    <Card size="medium">
      <div className="flex flex-col gap-[8px] items-center">
        <div className="text-sm font-medium">Your voucher name here</div>
        <div className="flex flex-col gap-[4px] text-center">
          {barCode ? (
            <img src={barCode} alt="" className="object-contain" />
          ) : null}
          {banner ? (
            <img src={banner} alt="" className="object-contain rounded-[8px]" />
          ) : null}
          <div className="text-lg font-semibold">VOUCHER CODE</div>
          <div className="text-gray6 font-normal text-sm">
            Phát hành lúc 12:14, 20/11/2025
          </div>
        </div>
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] bg-[#FAEEEA80] rounded-[8px]">
          <div className="text-red6 font-medium text-xs">
            Hạn sử dụng: 20/12/2025
          </div>
          <Divider type="vertical" className="m-0 h-[12px]" />
          <div className="text-red6 font-medium text-xs">
            Hết hạn sau 4 ngày
          </div>
        </div>
      </div>
      <Button
        text={
          <div className="text-white text-base font-medium">
            Bấm để nhận mã QR qua Zalo
          </div>
        }
        className="bg-green6 rounded-[8px] py-[14px] flex items-center w-full justify-center"
      />
    </Card>
  );
};

export { Voucher };

type TVoucher = FC<{ barCode?: string; banner?: string }>;
