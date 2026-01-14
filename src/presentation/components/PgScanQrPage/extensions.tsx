import React, { FC } from "react";
import QrIcon from "../../static/qr-icon.png";
import LocationIcon from "../../static/location-check-icon.png";
import { useNavigate } from "react-router-dom";

const Extensions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-xl font-semibold">Tiện tích của bạn</div>
      <div className="flex flex-col gap-[12px]">
        <Extension
          icon={QrIcon}
          title="Scan QR"
          desc="Quét mã để xác nhận thông tin checkin"
          style={{
            background: "linear-gradient(90deg, #4CBA80 0%, #0DC300 100%)",
          }}
          onClick={() => navigate("/checkin")}
        />
        <Extension
          icon={LocationIcon}
          title="Lịch sử check-in sự kiện"
          desc="Thông tin chi tiết check-inn"
          style={{
            background: "linear-gradient(90deg, #BEA9FF 0%, #B59EFC 100%)",
          }}
          onClick={() => navigate("/checkin-history")}
        />
      </div>
    </div>
  );
};

const Extension: TExtension = ({ icon, title, desc, style, onClick }) => {
  return (
    <div
      className="rounded-[8px] flex gap-[12px] items-center py-[20px] px-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F", ...style }}
      onClick={onClick}
    >
      <img src={icon} alt="" className="size-[32px] object-contain" />
      <div className="flex flex-col gap-[8px]">
        <div className="text-white font-medium text-base">{title}</div>
        <div className="text-white text-xs font-normal">{desc}</div>
      </div>
    </div>
  );
};

export { Extensions };

type TExtension = FC<{
  icon: string;
  title?: string;
  desc?: string;
  style: React.CSSProperties;
  onClick?: () => void;
}>;
