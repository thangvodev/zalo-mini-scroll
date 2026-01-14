import React from "react";
import QR from "../../static/QR.png";

const QRContainer = () => {
  return (
    <div
      className="size-[160px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
      style={{ boxShadow: "0px 4.8px 9.6px 0px #3F5F7C1A" }}
    >
      <img src={QR} alt="" />
    </div>
  );
};

export { QRContainer };
