import React, { FC } from "react";
import { InputNumber as OriginalInputNumber, InputNumberProps } from "antd";

function InputNumber(props: InputNumberProps) {
  return <OriginalInputNumber min={0} changeOnWheel {...props} />;
}

function InputNumberCurrency({
  locale = "vi-VN",
  currency = "VND",
  ...props
}: TInputNumberCurrencyProps) {
  const currencyFormatter =
    (currency: Intl.NumberFormatOptions["currency"]) =>
    (value: number | undefined) => {
      if (!value) {
        return "";
      }
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(value);
    };

  const currencyParser = (val: any) => {
    try {
      // for when the input gets clears
      if (typeof val === "string" && !val.length) {
        val = "0.0";
      }

      // detecting and parsing between comma and dot
      const group = new Intl.NumberFormat(locale)
        .format(1111)
        .replace(/1/g, "");
      const decimal = new Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/1/g, "");
      let reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
      reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
      //  => 1232.21 €

      // removing everything except the digits and dot
      reversedVal = reversedVal.replace(/[^0-9.]/g, "");
      //  => 1232.21

      // appending digits properly
      const digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
      const needsDigitsAppended = digitsAfterDecimalCount > 2;

      if (needsDigitsAppended) {
        reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
      }

      return Number.isNaN(reversedVal) ? 0 : reversedVal;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OriginalInputNumber
      min={0}
      changeOnWheel
      formatter={currencyFormatter(currency)}
      parser={currencyParser}
      {...props}
    />
  );
}

const InputNumberSeparate: FC<TInputNumberSeparateProps> = ({
  separator = ".",
  digitsPerGroup = 3,
  ...props
}) => {
  const formatter: InputNumberProps<number>["formatter"] = (value) => {
    const [start, end] = `${value}`.split(separator) || [];

    const regex = new RegExp(`\\B(?=(\\d{${digitsPerGroup}})+(?!\\d))`, "g");
    const v = `${start}`.replace(regex, separator);

    return `${end ? `${v}${separator}${end}` : `${v}`}`;
  };

  const parser = (value) => {
    const separatorRegex = new RegExp(`\\${separator}`, "g");
    return value?.replace(separatorRegex, "");
  };

  return (
    <OriginalInputNumber formatter={formatter} parser={parser} {...props} />
  );
};

InputNumber.Currency = InputNumberCurrency;
InputNumber.Separate = InputNumberSeparate;

export { InputNumber };

type TInputNumberCurrencyProps = InputNumberProps & {
  currency?: string;
  locale?: string;
};

type TInputNumberSeparateProps = InputNumberProps & {
  separator?: string;
  digitsPerGroup?: number;
};
