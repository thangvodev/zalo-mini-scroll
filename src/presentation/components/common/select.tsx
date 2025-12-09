import React, { FC } from "react";
import { ConfigProvider, Select as OriginalSelect, SelectProps } from "antd";
import ChevronIcon from "../icons/ChevronIcon";

const Select: FC<Props> = ({
  fontSize = 14,
  optionFontSize = 14,
  colorBorder = "#d9d9d9",
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize: fontSize, colorBorder: colorBorder },
        components: { Select: { optionFontSize: optionFontSize } },
      }}
    >
      <OriginalSelect
        suffixIcon={
          <ChevronIcon className="size-[10px] rotate-90 text-gray5" />
        }
        {...rest}
      />
    </ConfigProvider>
  );
};

export { Select };

type Props = {
  fontSize?: number;
  optionFontSize?: number;
  colorBorder?: string;
} & SelectProps;
