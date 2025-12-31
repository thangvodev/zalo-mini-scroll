import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

const Card: TCard = ({ children, size = "small", direction = "vertical" }) => {
  switch (size) {
    case "small":
      return (
        <div
          className={clsx(
            "rounded-[12px] p-[12px] bg-white flex gap-[12px] mx-[16px]",
            {
              "flex-row justify-between items-center":
                direction === "horizontal",
              "flex-col": direction === "vertical",
            }
          )}
          style={{
            boxShadow: "0px 4px 24px 0px #BABABA1F",
          }}
        >
          {children}
        </div>
      );

    case "medium":
      return (
        <div
          className={clsx(
            "rounded-[12px] pt-[20px] pb-[24px] px-[16px] bg-white flex gap-[20px] mx-[16px]",
            {
              "flex-row justify-between items-center":
                direction === "horizontal",
              "flex-col": direction === "vertical",
            }
          )}
          style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
        >
          {children}
        </div>
      );

    default:
      return null;
  }
};

export { Card };

type TCard = FC<
  PropsWithChildren & {
    size?: "small" | "medium";
    direction?: "horizontal" | "vertical";
  }
>;
