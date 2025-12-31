import React from "react";
import { Card } from "./card";
import { Select } from "../common/select";
import { Form } from "../common/form";
import { Switch } from "../common/switch";
import LocationCrossIcon from "../../static/location-cross.png";
import LocationTickIcon from "../../static/location-tick.png";
import { Button } from "../common/button";
import { Input } from "antd";
import { Receipt } from "./receipt";
import { OrderDetails } from "./order-details";
import BannerImg from "../../static/banner.jpg";
import { SharePost } from "./share-post";
import LocationOutlineIcon from "../icons/LocationOutlineIcon";
import { StarOutlined } from "@ant-design/icons";
import { Checkbox } from "../common/checkbox";
import { FloatButton } from "./float-button";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} className="flex flex-col gap-[24px] py-[16px]">
        <Card>
          <Form.Item
            label="Chọn shop gần bạn"
            labelCol={{ className: "!p-0" }}
            className="!m-0"
            labelFontSize={16}
          >
            <Select
              placeholder="Bấm vào để chọn shop"
              className="h-[48px] rounded-[8px]"
            />
          </Form.Item>
          <div className="flex gap-[12px]">
            <Form.Item noStyle>
              <Switch color="#4CBA81" />
            </Form.Item>
            <div className="text-sm font-normal text-gray8">
              Bấm vào chia sẻ vị trí của bạn để tìm shop gần nhất
            </div>
          </div>
        </Card>
        <Card>
          <div className="text-base font-normal">
            Chia sẻ vị trí của bạn để tham gia
          </div>
          <div className="flex gap-[12px]">
            <Form.Item noStyle>
              <Switch color="#4CBA81" />
            </Form.Item>
            <div className="text-sm font-normal text-gray8">
              Bấm vào để chia sẻ vị trí
            </div>
          </div>
        </Card>
        <Card>
          <div className="text-base font-normal">
            Chia sẻ vị trí của bạn để tham gia
          </div>
          <div className="flex gap-[8px] border border-red6 rounded-[8px] py-[12px] items-center justify-center bg-red1">
            <img src={LocationCrossIcon} className="size-[20px]" />
            <div className="text-sm font-medium text-red6">
              Vị trí hiện tại của bạn không hợp lệ
            </div>
          </div>
        </Card>
        <Card>
          <div className="text-base font-normal">
            Chia sẻ vị trí của bạn để tham gia
          </div>
          <div className="flex gap-[8px] border border-green6 rounded-[8px] py-[12px] items-center justify-center bg-green1">
            <img src={LocationTickIcon} className="size-[20px]" />
            <div className="text-sm font-medium text-green7">
              Vị trí hiện tại của bạn không hợp lệ
            </div>
          </div>
        </Card>
        <Card size="medium">
          <div className="text-base font-normal">
            Wow! Bạn được tặng 03 lượt quay may mắn từ Giftzone hôm nay!
          </div>
          <Button
            text={
              <div className="text-white text-base font-medium">
                Bấm quay để nhận quà ngay
              </div>
            }
            className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
          />
        </Card>
        <Card size="medium">
          <div className="flex flex-col gap-[8px]">
            <div className="text-lg font-semibold">
              Phone vefication via OTP
            </div>
            <div className="text-sm font-normal">Description</div>
          </div>
          <Form.Item
            label="Verify code title"
            labelCol={{ className: "!p-0" }}
            className="!m-0"
            labelFontSize={16}
          >
            <Input className="h-[48px]" allowClear />
          </Form.Item>
          <Button
            text={
              <div className="text-white text-base font-medium">
                Yêu cầu xác thực
              </div>
            }
            className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
          />
        </Card>
        <Card size="medium">
          <Form.Item
            label="Số điện thoại"
            labelCol={{ className: "!p-0" }}
            className="!m-0"
            rules={[
              {
                type: "string",
                required: true,
                message: "Số điện thoại này đã đăng ký trong vòng 30 ngày.",
              },
            ]}
            labelFontSize={16}
          >
            <Input className="h-[48px]" allowClear />
          </Form.Item>
          <Button
            text={
              <div className="text-white text-base font-medium">
                Yêu cầu xác thực
              </div>
            }
            className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
          />
        </Card>
        <Card size="medium">
          <div className="text-sm font-normal text-gray8">
            Chức năng để xem số lượng mà rút thăm đã phát hành theo Quán (Mã rút
            thăm dạng số thứ tự theo ngày)
          </div>
          <Form.Item
            label="Chọn quán"
            labelCol={{ className: "!p-0" }}
            className="!m-0"
            labelFontSize={16}
          >
            <Select
              placeholder="Bấm vào để chọn quán"
              className="h-[48px] rounded-[8px]"
            />
          </Form.Item>
          <div className="flex flex-col gap-[12px]">
            <Button
              text={
                <div className="text-white text-base font-medium">
                  Bấm vào đây để xem
                </div>
              }
              className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
            />
            <div className="border border-green5 bg-[#E3FCF099] flex items-center justify-center rounded-[8px] py-[14px]">
              <div className="text-base font-normal text-gray7">
                Tổng số mã phát hành là:{" "}
                <span className="font-medium text-black">12324</span>
              </div>
            </div>
          </div>
        </Card>
        <Receipt />
        <OrderDetails />
        <Card size="medium">
          <div className="text-lg font-semibold text-center">
            Chia sẻ và link bên dưới cho bạn bè cùng tham gia và nhận quà nhé!
          </div>
          <img
            src={BannerImg}
            alt=""
            className="rounded-[8px] h-[166px] object-cover"
          />
          <div className="bg-gray1 px-[14px] py-[16px] rounded-[12px]">
            <div className="line-clamp-1 text-gray8 font-normal text-base">
              {`https://zalo.cloud/?continue=https%3A%2F%2Faccount.zalo.cloud%2FNAU87QGAQ9NG7R6M8%2Ftool%2Fzns%2Fmanage%2Ftemplate`}
            </div>
          </div>
          <Button
            text={
              <div className="text-white text-base font-medium">
                Bấm vào đây để chia sẻ cho bạn bè
              </div>
            }
            className="bg-green6 rounded-[8px] py-[14px] flex items-center justify-center"
          />
        </Card>
        <SharePost />
        <Card>
          <div className="text-base font-normal">
            Quan tâm OA để nhận được nhiều ưu đãi hấp dẫn từ PangoCDP
          </div>
          <div className="flex gap-[12px]">
            <Form.Item valuePropName="checked" noStyle>
              <Switch color="#4CBA81" />
            </Form.Item>
            <div className="text-sm font-normal text-gray8">
              Bấm vào để Follow OA
            </div>
          </div>
        </Card>
        <Card direction="horizontal">
          <div className="flex gap-[8px] items-center">
            <div className="size-[40px] bg-[#F4F6F4] rounded-full flex justify-center items-center">
              <LocationOutlineIcon className="size-[20px] text-green5" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-xs font-medium">Cấp quyền vị trí</div>
              <div className="text-gray5 font-normal text-2xs">
                Để xác định vị trí hiện tại của bạn
              </div>
            </div>
          </div>
          <Form.Item valuePropName="checked" noStyle>
            <Switch color="#4CBA81" />
          </Form.Item>
        </Card>
        <Card size="medium">
          <div className="text-base font-normal text-center">
            Theo dõi Zalo OA Giftzone để nhận thêm nhiều ưu đãi hấp dẫn từ nhãn
            hàng
          </div>
          <Button
            text={
              <div className="flex gap-[10px] items-center">
                <div className="text-green6 text-base font-medium">
                  Mời bạn quan tâm OA Giftzone
                </div>
                <StarOutlined className="text-[20px] text-green6" />
              </div>
            }
            className="bg-white rounded-[8px] py-[14px] flex items-center justify-center border-[1.5px] border-green6"
          />
        </Card>
        <div className="flex gap-[12px] items-start mx-[16px]">
          <Checkbox color="#4CBA81" />
          <div className="flex flex-col gap-[8px]">
            <div className="text-base font-normal leading-5">
              Tôi đã đọc và đồng ý với các điều khoản và điều kiện của chương
              trình (*)
            </div>
            <div className="text-purple6 font-medium text-base underline">
              Điều khoản & Điều kiện
            </div>
          </div>
        </div>
      </Form>
      <FloatButton />
    </>
  );
};

export default Content;
