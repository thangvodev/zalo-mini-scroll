import React from "react";
import QRCode from "../../static/QR.png";
import { Button } from "../common/button";

const QRGenerator = () => {
  return (
    <div className="flex flex-col gap-[20px] items-center px-[16px] py-[20px]">
      <div className="flex flex-col gap-[4px] items-center">
        <div className="text-base font-semibold">Mã QR của bạn</div>
        <div className="text-gray7 font-normal text-xs">Description</div>
      </div>
      <img src={QRCode} alt="" className="size-[257px]" />
      <div className="text-center text-sm font-normal">
        Để nhận mã QR qua tin nhắn Zalo vui lòng bấm nút bên dưới
      </div>
      <Button
        text={
          <div className="text-white text-base font-medium">
            Bấm để nhận mã QR qua Zalo
          </div>
        }
        className="bg-green6 rounded-[8px] py-[14px] flex items-center w-full justify-center"
      />
    </div>
  );
};

export { QRGenerator };
