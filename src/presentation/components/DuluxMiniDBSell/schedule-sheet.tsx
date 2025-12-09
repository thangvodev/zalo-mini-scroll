import { CloseOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Button } from "../common/button";
import RangeCalendar from "../common/range-calendar";

const ScheduleSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative px-[16px] pb-[20px] pt-[16px] font-manrope">
                <div
                  className="absolute right-[16px] top-[16px] flex size-[16px] items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="size-[14px] text-gray6" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"75vh"}
          style={{
            background: "#F5F7FA",
            overflow: "visible",
          }}
        >
          <div className="flex flex-1 flex-col gap-[12px] overflow-auto px-[16px] pb-[40px] items-center">
            <div className="text-brandblue text-xl font-bold">
              Chọn lịch hẹn validate
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              {/* <Calendar fullscreen={false} /> */}
              <RangeCalendar />
              {/* Buttons */}
              <div className="flex w-full gap-[12px] ">
                <Button
                  text={
                    <div className="text-sm font-medium text-gray6">
                      Quay lại
                    </div>
                  }
                  className="h-[41px] rounded-[4px] bg-gray2 px-[10px]"
                  style={{ boxShadow: "0px 3px 0px 0px #D7D5CB" }}
                />
                <Button
                  text={
                    <div className="text-sm font-medium text-white">
                      Xác nhận
                    </div>
                  }
                  className="h-[41px] rounded-[4px] px-[10px]"
                  style={{
                    background:
                      "linear-gradient(270deg, #2DC28D 0%, #1CA47D 54.86%, #16B18D 100%)",
                    boxShadow: "0px 3px 0px 0px #04977F",
                  }}
                />
              </div>
            </div>
          </div>
        </Sheet>,
        document.body
      )}
    </>
  );
};

export { ScheduleSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
