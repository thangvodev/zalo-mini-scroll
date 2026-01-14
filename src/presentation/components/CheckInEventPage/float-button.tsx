import React, { FC } from "react";
import { Button } from "../common/button";

const FloatButton: TFloatButton = ({ status, setStatus }) => {
  function renderButton() {
    switch (status) {
      case "unconfirmed":
        return (
          <Button
            text={
              <div className="text-base font-medium text-white">Xác nhận</div>
            }
            className="rounded-[32px] py-[14px] flex items-center justify-center flex-none w-full"
            style={{
              background:
                "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
            }}
            onClick={() => setStatus("confirmed")}
          />
        );

      case "confirmed":
        return (
          <div className="flex flex-col gap-[12px]">
            <Button
              text={
                <div className="text-base font-medium text-[#2CBC74]">
                  Tiếp tục quét mã QR
                </div>
              }
              className="rounded-[32px] py-[14px] flex items-center justify-center flex-none w-full bg-green1"
            />
            <Button
              text={
                <div className="text-base font-medium text-green6">
                  Về trang chủ
                </div>
              }
              className="rounded-[32px] py-[14px] flex items-center justify-center flex-none w-full border border-[#2CBC74]"
            />
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="bg-white sticky bottom-0 inset-x-0 px-[16px] pt-[12px] pb-[24px]">
      {renderButton()}
    </div>
  );
};

export { FloatButton };

type TFloatButton = FC<{
  status: "unconfirmed" | "confirmed" | "finished";
  setStatus: (status: any) => void;
}>;
