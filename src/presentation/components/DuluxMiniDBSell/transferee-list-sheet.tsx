import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchNormalIcon from "../icons/SearchNormalIcon";
import TransfereeImg from "../../static/transferee.jpg";
import CloseIcon from "../../static/close.png";
import { Button } from "../common/button";
import { ConfirmPopup } from "./confirm-popup";

const TransfereeListSheet: FC<Props> = ({ children }) => {
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
                  className="absolute right-[16px] top-[16px] flex size-[20px] rounded-full items-center justify-end overflow-hidden"
                  onClick={() => setVisible(false)}
                >
                  <img src={CloseIcon} className="size-full object-cover" />
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
          height={"85vh"}
          style={{
            background: "#F7F8FA",
            overflow: "visible",
          }}
        >
          <div className="flex flex-1 flex-col gap-[20px] overflow-auto px-[16px] pb-[40px] items-center">
            <div className="text-[#413B3B] text-xl font-bold">
              Chọn PC để bàn giao
            </div>
            <SearchBarNoPopup
              placeholder="024354656"
              prefix={<SearchNormalIcon className="size-[16px] ml-[8px]" />}
              className="!bg-transparent"
            />
            <div className="flex flex-col gap-[14px] w-full">
              <div className="text-[15px] font-bold">Kết quả tìm kiếm PC</div>
              <div className="flex flex-col gap-[12px] w-full">
                {transferees.map((transferee, index) => (
                  <TransfereeListItem key={index} transferee={transferee} />
                ))}
              </div>
            </div>
          </div>
        </Sheet>,
        document.body
      )}
    </>
  );
};

const TransfereeListItem: TTransfereeListItem = ({ transferee }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[12px] items-center">
        <img
          src={transferee.thumb}
          alt=""
          className="size-[32px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[4px]">
          <div className="text-xs font-normal">{transferee.name}</div>
          <div className="text-gray5 font-normal text-xs">
            {transferee.phone}
          </div>
        </div>
      </div>
      <ConfirmPopup>
        {({ open }) => (
          <Button
            text={
              <div className="text-white font-semibold text-xs">Bàn giao</div>
            }
            className="flex-none rounded-[4px] h-[30px] px-[10px]"
            style={{
              background: "linear-gradient(270deg, #2DC28D 0%, #16B18D 100%)",
              boxShadow: "0px 1.5px 0px 0px #169D7E",
            }}
            onClick={open}
          />
        )}
      </ConfirmPopup>
    </div>
  );
};

export { TransfereeListSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

type TTransfereeListItem = FC<{
  transferee: {
    thumb: string;
    name: string;
    phone: string;
  };
}>;

const transferees = [
  {
    thumb: TransfereeImg,
    name: "Nguyễn Văn Hà",
    phone: "09234847384",
  },
];
