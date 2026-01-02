import React from "react";
import { Checkbox } from "../common/checkbox";

export const TNC = () => {
  return (
    <div className="flex gap-[12px] items-start mx-[16px]">
      <Checkbox color="#4CBA81" />
      <div className="flex flex-col gap-[8px]">
        <div className="text-base font-normal leading-5">
          Tôi đã đọc và đồng ý với các điều khoản và điều kiện của chương trình
          (*)
        </div>
        <div className="text-purple6 font-medium text-base underline">
          Điều khoản & Điều kiện
        </div>
      </div>
    </div>
  );
};
