import { CheckCircleFilled } from "@ant-design/icons";
import React, { FC } from "react";

const Title: TTitle = ({ status }) => {
  switch (status) {
    case "confirmed":
      return (
        <div className="flex flex-col gap-[12px] items-center">
          <div className="flex gap-[8px] items-center">
            <CheckCircleFilled className="text-[#2CBC74] text-lg" />
            <div className="text-lg font-medium">Đã xác nhận checkin</div>
          </div>
          <div className="flex gap-[12px] items-center">
            <div className="bg-blue1 rounded-[24px] px-[8px] py-[4px]">
              <div className="text-[11px] font-medium text-blue6">
                Mã QR hợp lệ
              </div>
            </div>
            <div className="bg-green1 rounded-[24px] px-[8px] py-[4px]">
              <div className="text-[11px] font-medium text-[#2CBC74]">
                Xác nhận lúc 16:00, 12/12/2025
              </div>
            </div>
          </div>
        </div>
      );

    case "finished":
      return (
        <div className="flex flex-col gap-[12px] items-center">
          <div className="flex gap-[8px] items-center">
            <CheckCircleFilled className="text-[#2CBC74] text-lg" />
            <div className="text-lg font-medium">Đã xác nhận checkin</div>
          </div>
          <div className="flex gap-[12px] items-center">
            <div className="bg-blue1 rounded-[24px] px-[8px] py-[4px]">
              <div className="text-[11px] font-medium text-blue6">
                Mã QR hợp lệ
              </div>
            </div>
            <div className="bg-green1 rounded-[24px] px-[8px] py-[4px]">
              <div className="text-[11px] font-medium text-[#2CBC74]">
                Xác nhận lúc 16:00, 12/12/2025
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-col gap-[12px] items-center">
          <div className="text-lg font-medium">Đã xác thực mã QR hợp lệ</div>
          <div className="bg-blue1 rounded-[24px] px-[8px] py-[4px]">
            <div className="text-[11px] font-medium text-blue6">
              Mã QR hợp lệ
            </div>
          </div>
        </div>
      );
  }
};

export { Title };

type TTitle = FC<{ status: "unconfirmed" | "confirmed" | "finished" }>;
