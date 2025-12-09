import { TabsProps } from "antd";
import React from "react";
import { Tabs } from "../common/tabs";
import { Orders } from "./orders";

export const OrderTabs = () => {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <div className="text-[15px]">Chưa xác nhận</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[20px]">
          <Orders />
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="text-[15px]">Đã tiếp nhận</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[20px]">
          <Orders />
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="text-[15px]">Đã từ chối</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[20px]">
          <Orders />
        </div>
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      className="custom-tabs min-h-0 flex-1"
      items={tabs}
      tabBarStyle={{
        background: "white",
      }}
      selectColor="#0041A3"
    />
  );
};
