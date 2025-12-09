import React, { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Button: ButtonComponent = ({
  text,
  className,
  loading,
  loadingRender,
  ...rest
}) => {
  if (loading) {
    return loadingRender ? (
      loadingRender
    ) : (
      <button
        type="button"
        className={`flex flex-1 items-center gap-[12px] rounded ${className}`}
        {...rest}
        disabled
      >
        {text}
        <Spin indicator={<LoadingOutlined spin className="text-white" />} />
      </button>
    );
  }
  return (
    <button type="button" className={`flex-1 rounded ${className}`} {...rest}>
      {text}
    </button>
  );
};

const IconButton: FC<Props> = ({ icon, className, ...rest }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
};

Button.Icon = IconButton;

export { Button };

type Props = {
  text?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingRender?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonComponent extends React.FC<Props> {
  Icon: React.FC<Props>;
}
