import React, { FC, useEffect, useState, useRef } from "react";
import { Button } from "../common/button";
import clsx from "clsx";
import ReactPlayer from "react-player";
import ChevronIcon from "../icons/ChevronIcon";

const FullScreenVideo: FC<Props> = ({ videoUrl, setVideoUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const originalScrollTop = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      scrollContainerRef.current =
        containerRef.current.closest(".overflow-auto");
    }

    const originalOverflow = scrollContainerRef.current?.style.overflow;

    if (scrollContainerRef.current && videoUrl) {
      originalScrollTop.current = scrollContainerRef.current.scrollTop;
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.style.overflow = "hidden";
    }

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      if (scrollContainerRef.current && originalOverflow !== undefined) {
        scrollContainerRef.current.style.overflow = originalOverflow;
        scrollContainerRef.current.scrollTop = originalScrollTop.current;
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, [videoUrl]);

  return (
    <div
      className={clsx(
        "absolute top-0 size-full left-0 z-50 flex items-center justify-center bg-[#313131]",
        { "pointer-events-none": !videoUrl, invisible: !videoUrl }
      )}
    >
      <div ref={containerRef} className="relative h-full w-full">
        <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-end py-[20px]">
          {/* Back button */}
          <Button.Icon
            icon={<ChevronIcon className="rotate-90" />}
            onClick={() => setVideoUrl(undefined)}
            className="rounded-lg bg-opacity-50 px-[16px] py-[8px] text-white"
          />
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <div className="-rotate-90">
            <ReactPlayer
              width={dimensions.height > 0 ? dimensions.height - 150 : "100vh"}
              height={dimensions.width > 0 ? dimensions.width : "100vw"}
              src={videoUrl}
              config={{ youtube: {} }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FullScreenVideo };

type Props = {
  videoUrl?: string;
  setVideoUrl: (video?: string) => void;
};
