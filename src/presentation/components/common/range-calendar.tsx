import React, { useState } from "react";
import { Calendar, CalendarProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";
import { DatePicker } from "./date-picker";
import { Button } from "./button";
import ChevronIcon from "../icons/ChevronIcon";

dayjs.extend(isBetween);
dayjs.extend(localeData);

export default function RangeCalendar() {
  const [rangeStart, setRangeStart] = useState<Dayjs>();
  const [rangeEnd, setRangeEnd] = useState<Dayjs>();
  const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs());

  const handleSelect = (date: Dayjs) => {
    if (date.isSame(rangeStart)) {
      setRangeStart(undefined);
      setRangeEnd(undefined);
      return;
    }
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(date);
      setRangeEnd(undefined);
    } else {
      if (date.isBefore(rangeStart)) {
        setRangeEnd(rangeStart);
        setRangeStart(date);
      } else {
        setRangeEnd(date);
      }
    }
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    const isStart = rangeStart && current.isSame(rangeStart, "day");
    const isEnd = rangeEnd && current.isSame(rangeEnd, "day");
    const isInRange =
      rangeStart &&
      rangeEnd &&
      current.isBetween(rangeStart, rangeEnd, "day", "[]");
    const isToday = current.isSame(dayjs(), "day");

    let style = {};
    let backgroundStyle = {};

    if (isToday && !isInRange && !isStart && !isEnd) {
      style = {
        border: "1px solid #CCCCCC",
        borderRadius: "100%",
      };
    }

    if (isStart || isEnd) {
      style = {
        backgroundColor: "#14A375",
        color: "#fff",
        borderRadius: "100%",
      };
    }

    if (isStart) {
      backgroundStyle = {
        background: "linear-gradient(to right, white 50%, #8BE4C8 50%)",
      };
    } else if (isEnd) {
      backgroundStyle = {
        background: "linear-gradient(to right, #8BE4C8 50%, white 50%)",
      };
    } else if (isInRange && !isStart) {
      style = {
        color: "#fff",
      };
      backgroundStyle = {
        backgroundColor: "#8BE4C8",
      };
    }

    if (info.type === "date") {
      return (
        <div
          style={backgroundStyle}
          className="h-[36px] w-full flex items-center justify-center"
        >
          <div
            className="h-full flex items-center justify-center aspect-square text-base"
            style={style}
          >
            {current.date()}
          </div>
        </div>
      );
    }

    return info.originNode;
  };

  const formatRange = () => {
    if (!rangeStart) return "Select start date";
    if (!rangeEnd)
      return `${rangeStart.format("DD/MM/YYYY")} - Select end date`;
    return `${rangeStart.format("DD/MM/YYYY")} - ${rangeEnd.format(
      "DD/MM/YYYY"
    )}`;
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="p-[12px] border border-[#E8E8E8] rounded-[8px] bg-white">
        <div className="text-sm font-normal">{formatRange()}</div>
      </div>

      <div className="border border-stroke2 rounded-[5px] overflow-hidden">
        <Calendar
          fullscreen={false}
          value={calendarValue}
          onSelect={handleSelect}
          fullCellRender={cellRender}
          headerRender={({ value }) => {
            return (
              <div className="pt-[16px] flex items-center justify-between px-[16px]">
                <DatePicker
                  format={"[Tháng ]MM[/]YYYY"}
                  picker="month"
                  value={value}
                  onChange={(newValue) => {
                    setCalendarValue(newValue);
                  }}
                  allowClear={false}
                  suffixIcon={
                    <ChevronIcon className="size-[9.33px] text-[#CCCCCC] rotate-90" />
                  }
                  className="border-0 !ring-0 p-0 w-[137px]"
                  fontSize={16}
                />
                <div className="flex gap-[8px]">
                  <Button.Icon
                    icon={<ChevronIcon className="text-[#CCCCCC] rotate-180" />}
                    className="size-[24px]"
                    onClick={() => {
                      setCalendarValue(value.add(-1, "month"));
                    }}
                  />
                  <Button.Icon
                    icon={<ChevronIcon className="text-[#CCCCCC]" />}
                    className="size-[24px]"
                    onClick={() => {
                      setCalendarValue(value.add(1, "month"));
                    }}
                  />
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
