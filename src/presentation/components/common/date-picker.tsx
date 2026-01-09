import React, { FC, useEffect, useMemo } from "react";
import Picker, { PickerDataType, PickerProps } from "zmp-ui/picker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import {
  DatePicker as OriginalDatePicker,
  DatePickerProps,
  ConfigProvider,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { createRoot, Root } from "react-dom/client";
import { Button } from "./button";
import ChevronIcon from "../icons/ChevronIcon";

const DatePickerZUI: FC<TDatePickerZUIProps> = ({
  value,
  onChange,
  formatPickedValueDisplay,
  suffix,
  hourFormat = "24h",
  pickDate = true,
  ...props
}) => {
  const weekdays = ["CN", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"];

  const virtualDays = Array.from({ length: 100 }).map((_, index) => {
    const currentDate = dayjs().add(index, "day");
    return {
      displayName: `${weekdays[currentDate.day()]}, ${currentDate.format(
        "DD [th]M"
      )}`,
      value: currentDate.format("DD/MM/YYYY"),
    };
  });

  const virtualHours = Array.from(
    { length: hourFormat == "24h" ? 25 : 13 },
    (_, i) => i.toString().padStart(2, "0")
  ).map((hour, index) => ({
    displayName: hour,
    value: index,
  }));

  const virtualMinutes = Array.from({ length: 61 }, (_, i) =>
    i.toString().padStart(2, "0")
  ).map((hour, index) => ({
    displayName: hour,
    value: index,
  }));

  const virtualPeriods = [
    { displayName: "AM", value: "AM" },
    { displayName: "PM", value: "PM" },
  ];

  const reformatDayjsToPickerInput = (time: Dayjs = dayjs()) => {
    const base: any = {};

    if (pickDate) {
      base.date = time.format("DD/MM/YYYY");
    }

    if (hourFormat === "12h") {
      const hour24 = time.get("hour");
      const hour12 = hour24 % 12 || 12;
      const period = hour24 >= 12 ? "PM" : "AM";

      return {
        ...base,
        hour: hour12 === 12 ? 0 : hour12,
        minute: time.get("minute"),
        period: period,
      };
    }

    return {
      ...base,
      hour: time.get("hour"),
      minute: time.get("minute"),
    };
  };

  const reformatPickerOutputToDayjs = (formattedTime): Dayjs => {
    const getValue = (key: string) => formattedTime[key]?.value;

    let hour = getValue("hour") || 0;
    if (hour === undefined || hour === null) {
      hour = 0;
    }

    if (hourFormat === "12h") {
      const period = getValue("period");
      if (hour === 0) {
        hour = 12;
      }
      if (period === "PM" && hour !== 12) {
        hour += 12;
      } else if (period === "AM" && hour === 12) {
        hour = 0;
      }
    }

    let baseDate: Dayjs;
    if (pickDate) {
      baseDate = dayjs(getValue("date"), "DD/MM/YYYY");
    } else {
      baseDate = value ? value.startOf("day") : dayjs().startOf("day");
    }

    return baseDate
      .hour(hour)
      .minute(getValue("minute") || 0)
      .second(0)
      .millisecond(0);
  };

  const pickerData = useMemo(() => {
    let options: PickerDataType[] = [];

    options.push(
      {
        name: "hour",
        options: virtualHours,
      },
      {
        name: "minute",
        options: virtualMinutes,
      }
    );

    if (pickDate) {
      options.push({
        name: "date",
        options: virtualDays,
      });
    }

    if (hourFormat === "12h") {
      options.push({
        name: "period",
        options: virtualPeriods,
      });
    }

    return options;
  }, [hourFormat]);

  useEffect(() => {
    const roots: Root[] = [];

    const ChevronControls: FC<{ onUp: () => void; onDown: () => void }> = ({
      onUp,
      onDown,
    }) => {
      return (
        <div className="size-full flex flex-col items-center justify-between py-[70px]">
          <Button.Icon
            icon={<ChevronIcon className="-rotate-90" />}
            onClick={onUp}
          />
          <Button.Icon
            icon={<ChevronIcon className="rotate-90" />}
            onClick={onDown}
          />
        </div>
      );
    };

    const addChevronControls = () => {
      const pickerInner = document.querySelector(".zaui-picker-inner");
      const pickerColumns = document.querySelectorAll(".zaui-picker-column");

      if (pickerColumns.length === 0) {
        setTimeout(addChevronControls, 100);
        return;
      }

      if (pickerInner && !pickerInner.querySelector(".time-divider")) {
        const hourColumn = pickerColumns[0];
        const divider = document.createElement("div");
        divider.className =
          "time-divider flex items-center justify-center px-[1px]";
        divider.textContent = ":";
        divider.style.fontSize = "24px";
        divider.style.fontWeight = "bold";

        if (hourColumn.nextSibling) {
          pickerInner.insertBefore(divider, hourColumn.nextSibling);
        } else {
          pickerInner.appendChild(divider);
        }
      }

      pickerColumns.forEach((column, index) => {
        if (column.querySelector(".picker-chevron-controls")) {
          return;
        }

        const controlsContainer = document.createElement("div");
        controlsContainer.className =
          "picker-chevron-controls absolute inset-0 flex items-center justify-center pointer-events-none";
        column.appendChild(controlsContainer);

        const root = createRoot(controlsContainer);
        roots.push(root);

        root.render(
          <ChevronControls
            onUp={() => {
              console.log("Up clicked for", column);
            }}
            onDown={() => {
              console.log("Down clicked for", column);
            }}
          />
        );
      });
    };

    const observer = new MutationObserver(() => {
      if (document.querySelector(".zaui-picker-column")) {
        addChevronControls();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      roots.forEach((root) => root.unmount());
    };
  }, []);

  return (
    <Picker
      value={reformatDayjsToPickerInput(value)}
      onChange={(e) => {
        onChange(reformatPickerOutputToDayjs(e));
      }}
      formatPickedValueDisplay={(e) => {
        const parseDate = reformatPickerOutputToDayjs(e);
        return formatPickedValueDisplay?.(parseDate) || parseDate.format();
      }}
      suffix={<div className="mr-[10px]">{suffix}</div>}
      data={pickerData}
      {...props}
    />
  );
};

const DatePicker: DatePickerType = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            inputFontSize: props.fontSize ?? 14,
          },
        },
      }}
    >
      <OriginalDatePicker {...props} />
    </ConfigProvider>
  );
};

const RangePicker: RangePickerType = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            inputFontSize: props.fontSize ?? 14,
          },
        },
      }}
    >
      <OriginalDatePicker.RangePicker {...props} />
    </ConfigProvider>
  );
};

DatePicker.RangePicker = RangePicker;

export { DatePickerZUI, DatePicker };

type TDatePickerZUIProps = Omit<
  PickerProps,
  "data" | "formatPickedValueDisplay"
> & {
  value?: Dayjs;
  onChange?: any;
  formatPickedValueDisplay?: (value: Dayjs) => string;
  hourFormat?: "12h" | "24h";
  pickDate?: boolean;
};

type DatePickerType = FC<DatePickerProps & { fontSize?: number }> & {
  RangePicker: RangePickerType;
};

type RangePickerType = FC<RangePickerProps & { fontSize?: number }>;
