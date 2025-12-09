import React, { FC } from "react";
import { ConfigProvider, Tag as OriginTag, TagProps } from "antd";
import CheckMarkIcon from "../icons/CheckMarkIcon";

const Tag: FC<Props> = ({ color, ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        token: { blue: color ? color : "#007AFF" },
      }}
    >
      <OriginTag color="blue" {...rest} />
    </ConfigProvider>
  );
};

const CheckableTag: FC<CTagProps> = ({
  color,
  checked,
  onCheckChange,
  className,
  checkIcon,
  checkIconSize = 10,
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        token: { blue: color ? color : "#007AFF" },
      }}
    >
      {checked ? (
        <div className="relative">
          <OriginTag
            color="blue"
            className={`!m-0 block !p-0 ${className}`}
            onClick={() => onCheckChange?.(false)}
            {...rest}
          />
          {checkIcon ? (
            checkIcon
          ) : (
            <div
              className={`absolute bottom-0 right-0`}
              style={{
                width: `${checkIconSize}px`,
                height: `${checkIconSize}px`,
              }}
            >
              <CheckMarkIcon className={`size-full text-green6`} />
            </div>
          )}
        </div>
      ) : (
        <OriginTag
          color="white"
          className={`m-0 border !border-stroke1 p-0 !text-gray8 ${className}`}
          onClick={() => onCheckChange?.(true)}
          {...rest}
        />
      )}
    </ConfigProvider>
  );
};

export { Tag, CheckableTag };

type Props = {
  color?: string;
} & TagProps;

type CTagProps = {
  color?: string;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  checkIcon?: React.ReactNode;
  checkIconSize?: number;
} & TagProps;
