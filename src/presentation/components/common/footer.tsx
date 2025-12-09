import React from "react";
import TransitionLink from "./transition-link";
import HomeFilledIcon from "../icons/HomeFilledIcon";
import ProfileFilledIcon from "../icons/ProfileFilledIcon";
import ProfileIcon from "../icons/ProfileIcon";
import clsx from "clsx";
import ShareIcon from "../icons/ShareIcon";
import NotificationBingFilledIcon from "../icons/NotificationBingFilledIcon";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/home",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <HomeFilledIcon className="size-[24px] text-secondary3" />
      ) : (
        <HomeFilledIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Chia sẻ",
    path: "/share",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <ShareIcon className="size-[24px] text-secondary3" />
      ) : (
        <ShareIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Thông báo",
    path: "/notifications",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <NotificationBingFilledIcon className="size-[24px] text-secondary3" />
      ) : (
        <NotificationBingFilledIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Tài khoản",
    path: "/account",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <ProfileFilledIcon className="size-[20px] text-secondary3" />
      ) : (
        <ProfileIcon className="size-[20px] text-neutral5" />
      ),
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid bg-[#FFFFFF] px-[0] pb-[20px]"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
        boxShadow: "0px -4px 20px 0px #A4A4A440",
      }}
    >
      {NAV_ITEMS.map((item, key) => {
        return (
          <TransitionLink
            to={item.path}
            key={key}
            className="flex cursor-pointer justify-center"
          >
            {({ isActive }) => (
              <div
                className={clsx(
                  "flex w-fit flex-col items-center gap-[4px] border-t-2 border-transparent pt-[10px]",
                  { "!border-secondary4": isActive },
                )}
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div
                  className={`text-[11px] ${isActive ? "text-secondary4" : "text-gray5"}`}
                >
                  {item.name}
                </div>
              </div>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
