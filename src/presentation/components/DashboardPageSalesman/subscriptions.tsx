import React from "react";

const Subscriptions = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-lg font-bold text-[#413B3B]">Đăng ký</div>
      <div className="bg-white rounded-[12px] px-[24px] pb-[24px] flex flex-col">
        <div className="flex items-center justify-between py-[8px]">
          <div className="text-gray5 text-xs font-normal">Tổng công trình</div>
          <div className="text-[#413B3B] text-xl font-bold">52</div>
        </div>
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div
              className="flex items-center justify-between gap-[8px] py-[6px]"
              key={index}
            >
              <div className="flex gap-[12px] items-center">
                <div
                  className="size-[12px] rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-[#404040] text-sm font-normal">
                  {item.label}
                </div>
              </div>
              <div className="text-[#3C403A] text-sm font-bold">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Subscriptions };

const data = [
  {
    color: "#31CE9C",
    label: "Thành công",
    value: 23,
  },
  {
    color: "#3385FF",
    label: "Đã tiếp nhận",
    value: 12,
  },
  {
    color: "#EE2F2F",
    label: "Thất bại",
    value: 4,
  },
  {
    color: "#FFD800",
    label: "Chờ xác minh",
    value: 6,
  },
  {
    color: "#D7D5CB",
    label: "Quá hạn",
    value: 8,
  },
];
