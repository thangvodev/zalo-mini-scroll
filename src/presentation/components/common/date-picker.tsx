import React, { FC, useEffect, useMemo, useState } from "react";
import Picker, {
  PickerColumnOption,
  PickerDataType,
  PickerProps,
} from "zmp-ui/picker";
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
  pickType = "both",
  onVisibilityChange,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  // -------------------------------------------
  const virtualDays = useMemo(
    () =>
      Array.from({ length: dayjs(value).daysInMonth() }, (_, i) =>
        (i + 1).toString()
      ).map((day, index) => ({
        displayName: day,
        value: index + 1,
      })),
    [value]
  );

  const virtualMonths = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map(
        (month, index) => ({
          displayName: month,
          value: index,
        })
      ),
    []
  );

  const virtualYears = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => dayjs().year() + i).map((year) => ({
        displayName: year.toString(),
        value: year,
      })),
    []
  );

  const virtualHours = useMemo(
    () =>
      Array.from({ length: hourFormat == "24h" ? 25 : 13 }, (_, i) =>
        i.toString().padStart(2, "0")
      ).map((hour, index) => ({
        displayName: hour,
        value: index,
      })),
    [hourFormat]
  );

  const virtualMinutes = useMemo(
    () =>
      Array.from({ length: 61 }, (_, i) => i.toString().padStart(2, "0")).map(
        (hour, index) => ({
          displayName: hour,
          value: index,
        })
      ),
    []
  );

  const virtualSeconds = useMemo(
    () =>
      Array.from({ length: 61 }, (_, i) => i.toString().padStart(2, "0")).map(
        (hour, index) => ({
          displayName: hour,
          value: index,
        })
      ),
    []
  );

  const virtualPeriods = useMemo(
    () => [
      { displayName: "AM", value: "AM" },
      { displayName: "PM", value: "PM" },
    ],
    []
  );

  const pickerData = useMemo(() => {
    let options: PickerDataType[] = [];

    if (pickType == "date" || pickType == "both") {
      options.push(
        {
          name: "day",
          options: virtualDays,
        },
        {
          name: "month",
          options: virtualMonths,
        },
        {
          name: "year",
          options: virtualYears,
        }
      );
    }

    if (pickType == "time" || pickType == "both") {
      options.push(
        {
          name: "hour",
          options: virtualHours,
        },
        {
          name: "minute",
          options: virtualMinutes,
        },
        {
          name: "second",
          options: virtualSeconds,
        }
      );

      if (hourFormat === "12h") {
        options.push({
          name: "period",
          options: virtualPeriods,
        });
      }
    }

    return options;
  }, [hourFormat, pickType, value]);

  // -------------------------------------------

  const reformatDayjsToPickerInput = (time: Dayjs = dayjs().startOf("day")) => {
    const base: any = {};

    if (pickType == "date" || pickType == "both") {
      base.day = time.get("date");
      base.month = time.get("month");
      base.year = time.get("year");
    }

    if (pickType == "time" || pickType == "both") {
      if (hourFormat === "12h") {
        const hour24 = time.get("hour");
        const hour12 = hour24 % 12 || 12;
        const period = hour24 >= 12 ? "PM" : "AM";

        base.hour = hour12 === 12 ? 0 : hour12;
        base.minute = time.get("minute");
        base.second = time.get("second");
        base.period = period;
      } else {
        base.hour = time.get("hour");
        base.minute = time.get("minute");
        base.second = time.get("second");
      }
    }

    return base;
  };

  const reformatPickerOutputToDayjs = (formattedTime: {
    [name: string]: PickerColumnOption;
  }): Dayjs => {
    const getValue = (key: string) => formattedTime[key]?.value;

    let baseDate: Dayjs = dayjs().startOf("day");
    if (pickType == "date" || pickType == "both") {
      baseDate = baseDate
        .set("year", parseInt(getValue("year").toString()))
        .set("date", parseInt(getValue("day").toString()))
        .set("month", parseInt(getValue("month").toString()));
    }
    if (pickType == "time" || pickType == "both") {
      let hour = parseInt(getValue("hour").toString());
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

      baseDate = baseDate
        .set("hour", hour)
        .set("minute", parseInt(getValue("minute").toString()))
        .set("second", parseInt(getValue("second").toString()))
        .set("millisecond", 0);
    }

    return baseDate;
  };

  useEffect(() => {
    if (!visible) {
      return;
    }
    const roots: Root[] = [];
    let hasProcessed = false;

    const ChevronControls: FC<{ onUp: () => void; onDown: () => void }> = ({
      onUp,
      onDown,
    }) => {
      return (
        <div className="size-full flex flex-col items-center justify-around">
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

    const separateDateAndTimeColumns = () => {
      const pickerInner = document.querySelector(".zaui-picker-inner");
      if (!pickerInner) {
        return false;
      }

      if (
        pickerInner.previousElementSibling?.classList.contains(
          "zaui-picker-inner"
        )
      ) {
        return false;
      }

      switch (pickType) {
        case "date":
          pickerInner.classList.add("picker-type-date");
          break;

        case "time":
          pickerInner.classList.add("picker-type-time");
          break;

        default:
          const pickerColumns = pickerInner.querySelectorAll(
            ".zaui-picker-column"
          );
          const newPickerInner = document.createElement("div");

          for (let i = 0; i < 3; i++) {
            newPickerInner.appendChild(pickerColumns[i]);
          }

          newPickerInner.className =
            pickerInner.className + " picker-type-date";
          pickerInner.classList.add("picker-type-time");

          // Divider
          const divider = document.createElement("div");
          divider.className = "flex items-center justify-center w-full";
          divider.style.borderBottom = "1px solid #F5FAF9";

          // Date picker title
          const datePickerTitle = document.createElement("div");
          datePickerTitle.textContent = "Chọn ngày";
          datePickerTitle.style.fontSize = "18px";
          datePickerTitle.style.fontWeight = "500";
          datePickerTitle.style.textAlign = "center";

          // Time picker title
          const timePickerTitle = document.createElement("div");
          timePickerTitle.textContent = "Chọn giờ";
          timePickerTitle.style.fontSize = "18px";
          timePickerTitle.style.fontWeight = "500";
          timePickerTitle.style.textAlign = "center";

          pickerInner.parentElement?.insertBefore(newPickerInner, pickerInner);
          pickerInner.parentElement?.insertBefore(divider, pickerInner);
          pickerInner.parentElement?.insertBefore(
            datePickerTitle,
            newPickerInner
          );
          pickerInner.parentElement?.insertBefore(timePickerTitle, pickerInner);
          break;
      }

      return true;
    };

    const addChevronControls = () => {
      const pickerInners = document.querySelectorAll(".zaui-picker-inner");

      if (pickerInners.length === 0) {
        setTimeout(addChevronControls, 100);
        return;
      }

      separateDateAndTimeColumns();
      hasProcessed = true;

      const allPickerInners = document.querySelectorAll(".zaui-picker-inner");

      allPickerInners.forEach((pickerInner) => {
        const pickerColumns = pickerInner.querySelectorAll(
          ".zaui-picker-column"
        );

        if (pickerColumns.length === 0) return;

        const isTimePicker = pickerInner.classList.contains("picker-type-time");

        if (
          isTimePicker &&
          pickerInner.querySelectorAll(".time-divider").length < 2
        ) {
          const hourColumn = pickerColumns[0];
          const minuteColumn = pickerColumns[1];

          [hourColumn, minuteColumn].forEach((column) => {
            const divider = document.createElement("div");
            divider.className =
              "time-divider flex items-center justify-center px-[10px] h-[156px]";
            divider.textContent = ":";
            divider.style.fontSize = "18px";
            divider.style.fontWeight = "400";

            if (column.nextSibling) {
              pickerInner.insertBefore(divider, column.nextSibling);
            } else {
              pickerInner.appendChild(divider);
            }
          });
        }

        pickerColumns.forEach((column) => {
          if (
            column.querySelector(".picker-chevron-controls") ||
            !isTimePicker
          ) {
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
      });
    };

    const observer = new MutationObserver(() => {
      if (!hasProcessed && document.querySelector(".zaui-picker-column")) {
        addChevronControls();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    addChevronControls();

    return () => {
      if (!visible) {
        observer.disconnect();
        roots.forEach((root) => root.unmount());
      }
    };
  }, [pickType, visible]);

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
      onVisibilityChange={(visible) => {
        setVisible(visible);
        onVisibilityChange?.(visible);
      }}
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
  "data" | "formatPickedValueDisplay" | "value"
> & {
  value?: Dayjs;
  onChange?: any;
  formatPickedValueDisplay?: (value: Dayjs) => string;
  hourFormat?: "12h" | "24h";
  pickType?: "date" | "time" | "both";
};

type DatePickerType = FC<DatePickerProps & { fontSize?: number }> & {
  RangePicker: RangePickerType;
};

type RangePickerType = FC<RangePickerProps & { fontSize?: number }>;
