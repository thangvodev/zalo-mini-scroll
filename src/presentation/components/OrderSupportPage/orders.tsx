import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchNormalIcon from "../icons/SearchNormalIcon";
import { Divider } from "antd";
import ChevronIcon from "../icons/ChevronIcon";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-xl font-bold ">Đơn hàng nội bộ cần xác nhận</div>
      <SearchBarNoPopup
        placeholder="Tìm cửa hàng"
        prefix={
          <SearchNormalIcon className="size-[16px] ml-[8px] text-gray7" />
        }
        className="!bg-blue2 border-none !ring-0 h-[36px]"
      />
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <OrderItem key={index} />
        ))}
      </div>
    </div>
  );
};

const OrderItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-stroke2 bg-white py-[10px] px-[12px] rounded-[8px] flex flex-col gap-[12px]"
      onClick={() => navigate("/orders/1")}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px]">
          <div className="text-gray5 font-normal text-xs">
            Mã đơn hàng: #12324
          </div>
          <div className="text-base font-bold">
            Cửa hàng Dulux Nguyễn Văn Trỗi
          </div>
          <div className="text-xs font-normal">
            50 Nguyễn Văn Trỗi, quận 3, HCM
          </div>
        </div>
        <div className="size-[24px] flex items-center justify-center">
          <ChevronIcon className="text-gray6 size-[12px]" />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex">
        <div className="flex flex-col gap-[4px] flex-1">
          <div className="text-gray6 font-normal text-[11px]">
            Số công trình
          </div>
          <div className="text-xs font-bold">120</div>
        </div>
        <div className="flex flex-col gap-[4px] flex-1">
          <div className="text-gray6 font-normal text-[11px]">Giá trị</div>
          <div className="text-red4 text-xs font-bold">1.200.000đ</div>
        </div>
      </div>
    </div>
  );
};

export { Orders };
