import { Badge as OriginalBadge, BadgeProps, ConfigProvider } from "antd";
import React, { FC } from "react";

const Badge: FC<Props> = ({ dotSize, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            dotSize: dotSize ?? 5,
          },
        },
      }}
    >
      <OriginalBadge {...props} />
    </ConfigProvider>
  );
};

export { Badge };

type Props = BadgeProps & {
  dotSize?: number;
};
