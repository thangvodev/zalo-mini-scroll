import React, { FC } from "react";
import { Card } from "./card";
import { Form } from "../common/form";
import { FormInstance } from "antd";
import { Select } from "../common/select";
import { Switch } from "../common/switch";

const ShopPicker: TShopPicker = ({ form }) => {
  return (
    <Form form={form}>
      <Card>
        <Form.Item
          label="Chọn shop gần bạn"
          labelCol={{ className: "!p-0" }}
          className="!m-0"
          labelFontSize={16}
        >
          <Select
            placeholder="Bấm vào để chọn shop"
            className="h-[48px] rounded-[8px]"
          />
        </Form.Item>
        <div className="flex gap-[12px]">
          <Form.Item noStyle>
            <Switch color="#4CBA81" />
          </Form.Item>
          <div className="text-sm font-normal text-gray8">
            Bấm vào chia sẻ vị trí của bạn để tìm shop gần nhất
          </div>
        </div>
      </Card>
    </Form>
  );
};

export { ShopPicker };

type TShopPicker = FC<{ form: FormInstance }>;
