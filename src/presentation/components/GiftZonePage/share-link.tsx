import React from "react";
import { Card } from "./card";
import BannerImg from "../../static/banner.jpg";
import { Button } from "../common/button";

export const ShareLink = () => {
  return (
    <Card size="medium">
      <div className="text-lg font-semibold text-center">
        Chia sẻ và link bên dưới cho bạn bè cùng tham gia và nhận quà nhé!
      </div>
      <img
        src={BannerImg}
        alt=""
        className="rounded-[8px] h-[166px] object-cover"
      />
      <div className="bg-gray1 px-[14px] py-[16px] rounded-[12px]">
        <div className="line-clamp-1 text-gray8 font-normal text-base">
          {`https://zalo.cloud/?continue=https%3A%2F%2Faccount.zalo.cloud%2FNAU87QGAQ9NG7R6M8%2Ftool%2Fzns%2Fmanage%2Ftemplate`}
        </div>
      </div>
      <Button
        text={
          <div className="text-white text-base font-medium">
            Bấm vào đây để chia sẻ cho bạn bè
          </div>
        }
        className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
      />
    </Card>
  );
};
