import React from "react";
import BannerImg from "../../static/banner.jpg";

const PhotoSlideshow = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] py-[12px] bg-white">
      <div className="text-base font-semibold">Bấm vào đây để xem tài liệu</div>
      <img
        src={BannerImg}
        alt=""
        className="h-[182px] object-cover rounded-[8px]"
      />
    </div>
  );
};

export { PhotoSlideshow };
