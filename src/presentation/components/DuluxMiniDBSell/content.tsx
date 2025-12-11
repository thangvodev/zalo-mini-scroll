import React from "react";
import { FloatButton } from "./float-button";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[10px]">
      <button onClick={() => navigate("/order-support")}>
        Hỗ trợ đặt hàng
      </button>
      <button onClick={() => navigate("/point-history")}>
        Lịch sử tích điểm
      </button>
      <FloatButton />
    </div>
  );
};

export default Content;
