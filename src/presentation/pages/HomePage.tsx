import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { DatePickerZUI } from "../components/common/date-picker";
import ChevronIcon from "../components/icons/ChevronIcon";
import dayjs from "dayjs";
import { Form } from "../components/common/form";

const HomePage: FC = () => {
  const [form] = Form.useForm();

  return (
    <Page className="flex-1  bg-white">
      <Header title="a" className="!relative" />
      <div className="flex-1 overflow-auto px-[16px] flex flex-col gap-4">
        <Form form={form}>
          <Form.Item name="dateTime">
            <DatePickerZUI
              hourFormat="12h"
              action={{
                close: true,
                text: "Xác nhận",
              }}
              inputClass="!text-xs !border-gray2 !m-0 !h-[40px]"
              suffix={<ChevronIcon className="size-[10px] rotate-90" />}
              placeholder="Chọn ngày giờ"
              formatPickedValueDisplay={(value) => {
                return value.isSame(dayjs(), "day")
                  ? value.format("[Hôm nay, ]H:mm:ss")
                  : value.format("DD [th] M YYYY[, ]H:mm:ss");
              }}
              pickType="both"
            />
          </Form.Item>
        </Form>
      </div>
    </Page>
  );
};

export default HomePage;
