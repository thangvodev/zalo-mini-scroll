import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";
import { CloseOutlined } from "@ant-design/icons";
import TransfereeImg from "../../static/transferee.jpg";

const ConfirmPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="text-xl font-bold text-[#413B3B]">
                  Xác nhận bàn giao cho
                </div>
                <div
                  className="absolute top-0 right-[10px] flex size-[14px] items-center justify-end translate-y-1/2"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="size-full text-gray6" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
          modalStyle={{
            borderRadius: "12px",
            overflow: "visible",
            minWidth: "343px",
            backgroundColor: "#F7F8FA",
            padding: "24px 16px",
          }}
        >
          <div className="flex flex-col items-center gap-[24px] pt-[24px]">
            {/* Details */}
            <div
              className="rounded-[12px] bg-white p-[10px] flex items-center gap-[12px] w-full"
              style={{ boxShadow: "0px 4px 8px 0px #CACBD71F" }}
            >
              <img
                src={TransfereeImg}
                alt=""
                className="size-[40px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[4px]">
                <div className="text-base font-bold">Nguyễn Văn Hà</div>
                <div className="text-base font-normal">Thành phố Đà Nẵng</div>
                <div className="text-gray5 text-sm font-normal">
                  09234847384
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex w-full gap-[12px] px-[6px]">
              <Button
                text={<div className="text-sm font-medium text-gray6">Hủy</div>}
                className="h-[41px] rounded-[4px] bg-gray2 px-[10px]"
                style={{ boxShadow: "0px 3px 0px 0px #D7D5CB" }}
                onClick={handleCancel}
              />
              <Button
                text={
                  <div className="text-sm font-bold text-white">Xác nhận</div>
                }
                className="h-[41px] rounded-[4px]  px-[10px]"
                onClick={handleAccept}
                style={{
                  background:
                    "linear-gradient(270deg, #2DC28D 0%, #1CA47D 54.86%, #16B18D 100%)",
                  boxShadow: "0px 2px 0px 0px #04977F",
                }}
              />
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

export { ConfirmPopup };
