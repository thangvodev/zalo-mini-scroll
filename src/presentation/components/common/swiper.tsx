import React, { FC, useRef } from "react";
import { Swiper as OriginalSwiper, SwiperProps } from "swiper/react";
import { Swiper as OriginalSwiperType } from "swiper";
import ChevronIcon from "../icons/ChevronIcon";

const Swiper: FC<Props> = ({ children, ...props }) => {
  const swiperRef = useRef<OriginalSwiperType>();

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <OriginalSwiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...props}
      >
        {children}
      </OriginalSwiper>
      <div className="absolute inset-x-0 top-1/2 z-[999] flex -translate-y-1/2 justify-between px-[16px] text-white">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex size-[16px] items-center justify-center"
        >
          <ChevronIcon className="size-full rotate-180" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex size-[16px] items-center justify-center"
        >
          <ChevronIcon className="size-full" />
        </button>
      </div>
    </div>
  );
};

export { Swiper };

type Props = SwiperProps;
