import React, { FC, useState } from "react";
import { Card } from "./card";
import { Form } from "../common/form";
import { FormInstance } from "antd";
import { Switch } from "../common/switch";
import LocationCrossIcon from "../../static/location-cross.png";
import LocationTickIcon from "../../static/location-tick.png";

const ShareLocationJoin: TShareLocationJoin = ({ form }) => {
  const [status, setStatus] = useState<TStatus>();

  return (
    <Form form={form}>
      <Card>
        <div className="text-base font-normal">
          Chia sẻ vị trí của bạn để tham gia
        </div>
        {!status ? (
          <div className="flex gap-[12px]" onClick={() => setStatus("valid")}>
            <Switch color="#4CBA81" />
            <div className="text-sm font-normal text-gray8">
              Bấm vào để chia sẻ vị trí
            </div>
          </div>
        ) : (
          <ShareLocationStatus status={status} />
        )}
      </Card>
    </Form>
  );
};

const ShareLocationStatus: TShareLocationStatus = ({ status }) => {
  if (status == "valid") {
    return (
      <div className="flex gap-[8px] border border-green6 rounded-[8px] py-[12px] items-center justify-center bg-green1">
        <img src={LocationTickIcon} className="size-[20px]" />
        <div className="text-sm font-medium text-green7">
          Vị trí hiện tại của bạn hợp lệ
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-[8px] border border-red6 rounded-[8px] py-[12px] items-center justify-center bg-red1">
      <img src={LocationCrossIcon} className="size-[20px]" />
      <div className="text-sm font-medium text-red6">
        Vị trí hiện tại của bạn không hợp lệ
      </div>
    </div>
  );
};

export { ShareLocationJoin };

type TShareLocationJoin = FC<{ form: FormInstance }>;
type TShareLocationStatus = FC<{ status: TStatus }>;
type TStatus = "valid" | "invalid";
