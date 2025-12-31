import { Divider } from "antd";
import React from "react";
import PizzaImg from "../../static/pizza.jpg";
import { Button } from "../common/button";
import AddCircleIcon from "../icons/AddCircleIcon";
import MinusCircleIcon from "../icons/MinusCircleIcon";

const OrderDetails = () => {
  return (
    <div
      className="bg-white flex flex-col gap-[20px] px-[16px] pt-[20px] pb-[24px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-lg font-semibold">Order information</div>
        <div className="text-sm font-normal">Description</div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Orders />
        <Divider dashed className="m-0" />
        <Subtotal />
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex justify-between">
              <div className="flex gap-[12px] items-center flex-1">
                <div className="relative size-[48px] rounded-[5.6px] overflow-hidden">
                  <img
                    src={PizzaImg}
                    alt=""
                    className="size-full object-cover"
                  />
                  <div className="bg-orange1 rounded-[3px] flex items-center justify-center absolute top-0 right-0 p-[4px]">
                    <div className="text-orange7 font-bold text-xs leading-none">
                      x1
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="text-sm font-medium">Lẩu dầu cay Mayla</div>
                  <div className="text-gray6 font-normal text-xs">Cay ít</div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end">
                <div className="text-gray9 text-sm font-medium">150,000 đ</div>
                <div className="flex gap-[10px] items-center">
                  <Button.Icon
                    icon={<MinusCircleIcon className="text-gray4" />}
                    className="size-[24px]"
                  />
                  <div className="text-lg font-semibold">1</div>
                  <Button.Icon
                    icon={<AddCircleIcon className="text-green6" />}
                    className="size-[24px]"
                  />
                </div>
              </div>
            </div>
            {index < 1 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Subtotal = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-normal">Tổng tiền</div>
          <div className="text-sm font-medium">320.000 đ</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-gray6 font-normal text-sm">Giảm giá</div>
          <div className="text-gray6 font-normal text-sm">- 70.000 đ</div>
        </div>
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-[15px] font-normal">Tổng tiền phải trả</div>
        <div className="text-base  font-semibold ">250.000đ</div>
      </div>
    </div>
  );
};

export { OrderDetails };
