import React, { FC } from "react";
import { Card } from "./card";
import { Form } from "../common/form";
import { Select } from "../common/select";
import { Button } from "../common/button";
import { FormInstance } from "antd";

const ShopTicketBatch: TShopTicketBatch = ({ form }) => {
  return (
    <Form form={form}>
      <Card size="medium">
        <div className="text-sm font-normal text-gray8">
          Chức năng để xem số lượng mà rút thăm đã phát hành theo Quán (Mã rút
          thăm dạng số thứ tự theo ngày)
        </div>
        <Form.Item
          label="Chọn quán"
          labelCol={{ className: "!p-0" }}
          className="!m-0"
          labelFontSize={16}
        >
          <Select
            placeholder="Bấm vào để chọn quán"
            className="h-[48px] rounded-[8px]"
          />
        </Form.Item>
        <div className="flex flex-col gap-[12px]">
          <Button
            text={
              <div className="text-white text-base font-medium">
                Bấm vào đây để xem
              </div>
            }
            className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
          />
          <div className="border border-green5 bg-[#E3FCF099] flex items-center justify-center rounded-[8px] py-[14px]">
            <div className="text-base font-normal text-gray7">
              Tổng số mã phát hành là:{" "}
              <span className="font-medium text-black">12324</span>
            </div>
          </div>
        </div>
      </Card>
    </Form>
  );
};

export { ShopTicketBatch };

type TShopTicketBatch = FC<{ form: FormInstance }>;
