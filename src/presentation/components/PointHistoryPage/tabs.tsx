import { TabsProps } from "antd";
import React from "react";
import { Tabs } from "../common/tabs";
import { HistoryList } from "./history-list";

export const HistoryTabs = () => {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <div className="text-[15px]">Tất cả</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <HistoryList />
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="text-[15px]">Cộng điểm</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <HistoryList />
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="text-[15px]">Đổi điểm</div>,
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <HistoryList />
        </div>
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      className="custom-tabs min-h-0 flex-1"
      items={tabs}
      selectColor="#0041A3"
    />
  );
};
