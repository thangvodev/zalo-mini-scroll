import React from "react";
import { Switch } from "../common/switch";
import { Card } from "./card";

export const RequestFollowOA = () => {
  return (
    <Card>
      <div className="text-base font-normal">
        Quan tâm OA để nhận được nhiều ưu đãi hấp dẫn từ PangoCDP
      </div>
      <div className="flex gap-[12px]">
        <Switch color="#4CBA81" />
        <div className="text-sm font-normal text-gray8">
          Bấm vào để Follow OA
        </div>
      </div>
    </Card>
  );
};
