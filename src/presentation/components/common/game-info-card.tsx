import React from "react";
import GoldBg from "../../static/images/gold-bg.jpg";
import CoinIcon from "../../static/icons/coin-gold.png";

interface GameInfoCardProps {
  name: string;
  type: string;
  rank: string;
  coin: number;
  avatar: string;
}

const GameInfoCard: React.FC<GameInfoCardProps> = ({
  name,
  type,
  rank,
  coin,
  avatar,
}) => {
  return (
    <div className="flex items-center justify-between rounded-2xl text-white">
      <div className="flex items-center gap-3">
        <div className="h-15 relative w-12">
          <img
            src={avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full border-[3px] border-white object-cover"
          />

          <div className="absolute -bottom-2 left-1/2 flex h-[14px] w-[26px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[12px]">
            {type === "gold" && (
              <img
                src={GoldBg}
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
            )}
            <span className="z-10 text-[8px] font-medium text-white">Gold</span>
          </div>
        </div>

        <div>
          <div className="text-[20px] font-medium">{name}</div>
          <div className="mt-1 h-[20px] rounded-xl border-[0.83px] border-white px-[9px] text-[10px] font-medium">
            Xếp hạng
            <span className="text-[11.59px]"> #{rank}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] border-[#FFF1CC]"
          style={{
            transform: "translateX(12px)",
          }}
        >
          <img src={CoinIcon} alt="coin" className="h-full w-full" />
        </div>

        <div
          className="flex h-[24px] min-w-[68px] items-center justify-center rounded-br-[10.5px] rounded-tr-[10.5px] border-[1.8px] border-orange2 bg-yellow1 px-[7px]"
          style={{
            boxShadow: "0px 3.5px 3.5px 0px #87878717",
          }}
        >
          <span className="text-[14px] font-bold text-orange6">{coin}</span>
        </div>
      </div>
    </div>
  );
};

export default GameInfoCard;
