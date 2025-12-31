import React from "react";
import BannerImg from "../../static/banner.jpg";
import PizzaImg from "../../static/pizza.jpg";
import { Button } from "../common/button";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import { Divider } from "antd";

const Receipt = () => {
  return (
    <div
      className="flex flex-col gap-[20px] pb-[24px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <img src={BannerImg} alt="" className="h-[200px] object-cover" />
      <div className="flex flex-col gap-[12px] px-[16px]">
        <div className="text-sm font-normal">
          Mua càng nhiều giá càng giảm hen!
        </div>
        <Orders />
        <Divider className="m-0" />
        <Subtotal />
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="border border-gray2 rounded-[12px] p-[12px] flex gap-[15px] items-start"
        >
          <img
            src={PizzaImg}
            alt=""
            className="size-[59px] object-cover rounded-[8px]"
          />
          <div className="flex flex-col flex-1 gap-[8px]">
            <div className="text-base font-normal">Pizza nhiệt đới size S</div>
            <div className="flex gap-[4px] items-end">
              <div className="text-red6 font-semibold text-base leading-4">
                150,000 đ
              </div>
              <div className="text-gray5 font-medium text-xs line-through">
                150,000 đ
              </div>
            </div>
          </div>
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
      ))}
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
        <div className="text-lg text-red6 font-semibold ">250.000đ</div>
      </div>
    </div>
  );
};

export { Receipt };
