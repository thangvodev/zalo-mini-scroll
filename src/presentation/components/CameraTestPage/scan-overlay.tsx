import React, { FC } from "react";
import { TCameraBoxConfigs } from "../common/camera";

const ScanOverlay: TScanOverlay = (props) => {
  if (!props.boxConfig) {
    return null;
  }

  const { width, height, top, left } = props.boxConfig;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Dark overlay with transparent center */}
      <svg className="w-full h-full">
        <defs>
          <mask id="scan-mask">
            <rect width="100%" height="100%" fill="white" />
            <rect
              x={left}
              y={top}
              width={width}
              height={height}
              fill="black"
              rx="20"
              ry="20"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 0.5)"
          mask="url(#scan-mask)"
        />
      </svg>

      {/* Bounding box */}
      <div
        className="absolute overflow-visible"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: `${left}px`,
        }}
      >
        {/* Borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white -translate-x-0.5 -translate-y-0.5 rounded-tl-[20px]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white translate-x-0.5 -translate-y-0.5 rounded-tr-[20px]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white -translate-x-0.5 translate-y-0.5 rounded-bl-[20px]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white translate-x-0.5 translate-y-0.5 rounded-br-[20px]" />
      </div>
      {props.helperArea?.(props)}
    </div>
  );
};

export { ScanOverlay };

type TScanOverlay = FC<TCameraBoxConfigs>;
