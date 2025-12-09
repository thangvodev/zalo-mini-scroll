import React from "react";
import { Progress } from "../common/progress";
import DotIcon from "../icons/DotIcon";
import CardBg from "../../static/statistic-card-bg.svg";

export const Statistics = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-[12px]">
        <div className="bg-blue1 rounded-[8px] px-[15px] py-[11px] flex flex-col gap-[4px] flex-1">
          <div className="text-gray5 text-[11px] font-normal">
            Số công trình
          </div>
          <div className="text-blue5 font-bold text-[15px]">120</div>
        </div>
        <div className="bg-green1 rounded-[8px] px-[15px] py-[11px] flex flex-col gap-[4px] flex-1">
          <div className="text-gray5 text-[11px] font-normal">Giá trị</div>
          <div className="text-green5 font-bold text-[15px]">1.200.000đ</div>
        </div>
      </div>
      <div className="flex gap-[12px]">
        {/* Card 1 */}
        <div
          className="relative rounded-[20px] flex flex-col gap-[20px] p-[12px] flex-1 items-center"
          style={{
            background:
              "linear-gradient(214.2deg, #369FFF 3.16%, #64B5FF 95.12%)",
          }}
        >
          <img
            src={CardBg}
            alt=""
            className="w-full absolute object-cover top-0"
          />
          <div
            className="rounded-[24px] px-[8px] h-[25px] bg-[#BAEFFF33] flex items-center justify-center"
            style={{
              backdropFilter: "blur(4px)",
              boxShadow: "0px 4px 12px 0px #0000000A",
            }}
          >
            <div className="text-white font-bold text-sm">Số công trình</div>
          </div>
          <Progress
            percent={70}
            type="circle"
            size={72}
            strokeWidth={10}
            strokeColor={"white"}
            trailColor="#F5F9FF99"
            circleTextColor="white"
          />
          <div className="flex flex-col w-full gap-[4px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <DotIcon className="text-white size-[8px]" />
                <div className="text-white text-[13px] font-normal">
                  Thực đạt
                </div>
              </div>
              <div className="text-white font-semibold text-xl">12,324</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <DotIcon className="text-red4 size-[8px]" />
                <div className="text-white text-[13px] font-normal">
                  Bị từ chối
                </div>
              </div>
              <div className="text-white font-semibold text-xl">2,000</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <DotIcon className="text-yellow3 size-[8px]" />
                <div className="text-white text-[13px] font-normal">
                  Kế hoạch
                </div>
              </div>
              <div className="text-white font-semibold text-xl">14,000</div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="relative rounded-[20px] flex flex-col gap-[20px] p-[12px] flex-1 items-center"
          style={{
            background:
              "linear-gradient(209.9deg, #31CE9C 3.2%, #2EDE91 97.35%)",
          }}
        >
          <img
            src={CardBg}
            alt=""
            className="w-full absolute object-cover top-0"
          />
          <div
            className="rounded-[24px] px-[8px] h-[25px] bg-[#BAEFFF33] flex items-center justify-center"
            style={{
              backdropFilter: "blur(4px)",
              boxShadow: "0px 4px 12px 0px #0000000A",
            }}
          >
            <div className="text-white font-bold text-sm">Doanh số</div>
          </div>
          <Progress
            percent={70}
            type="circle"
            size={72}
            strokeWidth={10}
            strokeColor={"white"}
            trailColor="#F5F9FF99"
            circleTextColor="white"
          />
          <div className="flex flex-col w-full gap-[4px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <DotIcon className="text-white size-[8px]" />
                <div className="text-white text-[13px] font-normal">
                  Thực đạt
                </div>
              </div>
              <div className="text-white font-semibold text-xl">12,324</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <DotIcon className="text-yellow3 size-[8px]" />
                <div className="text-white text-[13px] font-normal">
                  Kế hoạch
                </div>
              </div>
              <div className="text-white font-semibold text-xl">14,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
