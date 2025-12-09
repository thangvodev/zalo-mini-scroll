import React, { FC } from "react";
import { CollapseProps, Collapse as OriginalCollapse } from "antd";
import clsx from "clsx";
import ChevronIcon from "../icons/ChevronIcon";

const Collapse: FC<CollapseProps> = (props) => {
  return (
    <OriginalCollapse
      expandIcon={({ isActive }) => (
        <ChevronIcon
          className={clsx("size-[18px] object-contain p-[2px] text-gray6", {
            "rotate-90": isActive,
          })}
        />
      )}
      {...props}
    />
  );
};

export { Collapse };
