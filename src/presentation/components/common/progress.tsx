import React, { FC } from "react";
import {
  ConfigProvider,
  Progress as OriginalProgress,
  ProgressProps,
} from "antd";

const Progress: TProgress = ({ circleTextColor, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            circleTextColor: circleTextColor,
          },
        },
      }}
    >
      <OriginalProgress {...props} />
    </ConfigProvider>
  );
};

const ProgressSegments: TProgressSegments = ({
  percent,
  railSize = 8,
  strokeColor = "#3b82f6",
  railColor = "#e5e7eb",
  success = [],
  width,
}) => {
  const sortedSuccess = [...success].sort((a, b) => a.percent - b.percent);

  const segments: {
    start: number;
    end: number;
    color: string;
    isGradient: boolean;
  }[] = [];
  let prevPercent = 0;
  let prevColor = strokeColor;

  sortedSuccess.forEach((s) => {
    if (s.percent <= percent && s.percent > prevPercent) {
      segments.push({
        start: prevPercent,
        end: s.percent,
        color: prevColor,
        isGradient: prevColor.includes("gradient"),
      });
      prevPercent = s.percent;
      if (s.strokeColor) {
        prevColor = s.strokeColor;
      }
    }
  });

  if (percent > prevPercent) {
    segments.push({
      start: prevPercent,
      end: percent,
      color: prevColor,
      isGradient: prevColor.includes("gradient"),
    });
  }

  return (
    <div
      className="relative"
      style={{ height: `${railSize}px`, width: width ? `${width}px` : "100%" }}
    >
      {/* Rail */}
      <div
        className="absolute w-full rounded-full"
        style={{
          height: `${railSize}px`,
          background: railColor,
        }}
      />

      {/* Progress segments */}
      {segments.map((segment, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: `${segment.start}%`,
            width: `${segment.end - segment.start}%`,
            height: `${railSize}px`,
            background: segment.isGradient ? segment.color : segment.color,
            backgroundSize: segment.isGradient
              ? `${10000 / (segment.end - segment.start)}% 100%`
              : "auto",
            backgroundPosition: segment.isGradient
              ? `${(segment.start / (segment.end - segment.start)) * 100}% 0`
              : "0 0",
            borderTopLeftRadius: idx === 0 ? `${railSize}px` : 0,
            borderBottomLeftRadius: idx === 0 ? `${railSize}px` : 0,
            borderTopRightRadius:
              idx === segments.length - 1 ? `${railSize}px` : 0,
            borderBottomRightRadius:
              idx === segments.length - 1 ? `${railSize}px` : 0,
          }}
        />
      ))}

      {/* Success markers */}
      {sortedSuccess.map((s, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: `${s.percent}%`,
            top: "50%",
            transform: "translate(-100%, -50%)",
          }}
        >
          {s.render(s.percent)}
        </div>
      ))}
    </div>
  );
};

Progress.Segments = ProgressSegments;

export { Progress };

type TProgress = FC<ProgressProps & { circleTextColor?: string }> & {
  Segments: TProgressSegments;
};

type TProgressSegments = FC<{
  percent: number;
  railSize?: number;
  strokeColor?: string;
  railColor?: string;
  success?: {
    percent: number;
    strokeColor?: string;
    render: (percent: number) => React.ReactNode;
  }[];
  width?: number;
}>;
