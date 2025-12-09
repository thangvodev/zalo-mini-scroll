import { CloseOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Divider } from "antd";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchNormalIcon from "../icons/SearchNormalIcon";
import ChevronIcon from "../icons/ChevronIcon";
import { TransfereeListSheet } from "./transferee-list-sheet";
import CloseIcon from "../../static/close.png";

const TransferSheet: FC<Props> = ({ children }) => {
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
              Chọn tỉnh/ thành phố
            </div>
            <SearchBarNoPopup
              placeholder="Hồ Chí Minh"
              prefix={<SearchNormalIcon className="size-[16px] ml-[8px]" />}
              className="!bg-transparent"
            />
            <div className="flex flex-col gap-[12px] w-full">
              {cities.map((city, index) => (
                <React.Fragment key={index}>
                  <TransfereeListSheet>
                    {({ open }) => (
                      <div
                        className="flex items-center justify-between py-[2px]"
                        onClick={open}
                      >
                        <div className="text-sm font-normal">{city.name}</div>
                        <ChevronIcon className="size-[13px] text-[#374957]" />
                      </div>
                    )}
                  </TransfereeListSheet>

                  {index <= cities.length - 1 && <Divider className="m-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Sheet>,
        document.body
      )}
    </>
  );
};

export { TransferSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const cities = [
  {
    name: "Hồ Chí Minh",
    code: "1",
  },
  {
    name: "Đà Nẵng",
    code: "2",
  },
  {
    name: "Nghệ An",
    code: "3",
  },
];
