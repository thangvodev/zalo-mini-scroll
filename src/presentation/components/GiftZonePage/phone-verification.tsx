import React, { FC } from "react";
import { Card } from "./card";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Input } from "antd";
import { FormInstance } from "antd/lib";

const PhoneVerification: TPhoneVerification = ({ form }) => {
  return (
    <Form form={form}>
      <Card size="medium">
        <div className="flex flex-col gap-[8px]">
          <div className="text-lg font-semibold">Phone vefication via OTP</div>
          <div className="text-sm font-normal">Description</div>
        </div>
        <Form.Item
          label="Verify code title"
          labelCol={{ className: "!p-0" }}
          className="!m-0"
          labelFontSize={16}
        >
          <Input className="h-[48px]" allowClear />
        </Form.Item>
        <Button
          text={
            <div className="text-white text-base font-medium">
              Yêu cầu xác thực
            </div>
          }
          className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
        />
      </Card>
    </Form>
  );
};

export { PhoneVerification };

type TPhoneVerification = FC<{ form: FormInstance }>;
