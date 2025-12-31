import React from "react";
import BannerImg from "../../static/banner.jpg";
import { Button } from "../common/button";

const SharePost = () => {
  return (
    <div
      className="flex flex-col gap-[16px] p-[16px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-base font-semibold">Chia sẻ bài viết</div>
      <img
        src={BannerImg}
        alt=""
        className="h-[182px] rounded-[8px] object-cover"
      />
      <div className="flex flex-col gap-[8px]">
        <div className="text-sm font-medium">Post chia sẻ nhận quà hấp dẫn</div>
        <div className="text-gray8 font-normal text-sm line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <Button
        text={
          <div className="text-white text-base font-medium">
            Yêu cầu xác thực
          </div>
        }
        className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
      />
    </div>
  );
};

export { SharePost };
