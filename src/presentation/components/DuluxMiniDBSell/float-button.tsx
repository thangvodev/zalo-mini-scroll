import React from "react";
import { Button } from "../common/button";
import { ScheduleSheet } from "./schedule-sheet";
import { TransferSheet } from "./transfer-sheet";

export const FloatButton = () => {
  return (
    <div
      className="fixed bottom-0 inset-x-0 px-[16px] pt-[12px] pb-[24px] bg-white flex flex-col gap-[10px]"
      style={{ boxShadow: "0px -4px 24px 0px #CACBD740" }}
    >
      <ScheduleSheet>
        {({ open }) => (
          <Button
            text={<div className="text-white font-bold text-sm">Tiếp nhận</div>}
            className="h-[41px] flex-none rounded-[4px]"
            style={{
              boxShadow: "0px 2px 0px 0px #04977F",
              background:
                "linear-gradient(270deg, #2DC28D 0%, #1CA47D 54.86%, #16B18D 100%)",
            }}
            onClick={open}
          />
        )}
      </ScheduleSheet>
      <TransferSheet>
        {({ open }) => (
          <Button
            text={
              <div className="text-green4 font-bold text-sm">
                Bàn giao cho PC
              </div>
            }
            className="h-[41px] flex-none bg-green1 rounded-[4px]"
            style={{
              boxShadow: "0px 2px 0px 0px #8BE4C8",
            }}
            onClick={open}
          />
        )}
      </TransferSheet>
    </div>
  );
};
