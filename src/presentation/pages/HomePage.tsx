import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Header, Page } from "zmp-ui";
import { getAccessToken, getLocation } from "zmp-sdk/apis";
import { Form, Input, Rate } from "antd";

const KEY = "4a9LVONYkAWHDPNLR7F1";
const APP_ID = "178197451477352177";

const HomePage: FC = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState<TUser>({ at: "", rt: "", location: "" });

  async function getToken() {
    try {
      const { accessToken, refreshToken } = await getAccessToken();

      setUser((prev) => ({
        ...prev,
        at: accessToken,
        rt: refreshToken,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function refreshZaloToken() {
    const url = "https://oauth.zaloapp.com/v4/access_token";

    const formData = new URLSearchParams();
    formData.append("refresh_token", user?.rt);
    formData.append("app_id", APP_ID);
    formData.append("grant_type", "refresh_token");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          secret_key: KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUser((prev) => ({
        ...prev,
        at: data.access_token,
        rt: data.refresh_token,
      }));
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  async function geUsertLocation() {
    const { token } = await getLocation();

    const location = await fetch(`https://graph.zalo.me/v2.0/me/info`, {
      method: "GET",
      headers: {
        access_token: user?.at,
        code: token ?? "",
        secret_key: KEY,
      },
    }).then((res) => res.json());

    setUser((prev) => ({
      ...prev,
      location: location,
    }));
  }

  return (
    <Page className="flex-1  bg-white">
      <Header title="a" className="!relative" />
      <div className="flex-1 overflow-auto px-[16px] flex flex-col gap-4">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-5 "
          onFinish={(values) => {
            console.log(values);
          }}
          requiredMark={false}
          // validateTrigger={["onBlur", "onSubmit"]}
        >
          <Form.Item
            name="fullName"
            className="mb-0"
            label={
              <span className="block text-base text-black mb-[6px]">
                Tên của bạn <span className="text-red-500">*</span>
              </span>
            }
            rules={[
              { required: true, message: "Vui lòng nhập/chọn: Tên của bạn" },
            ]}
          >
            <Input
              // allowClear={{ clearIcon: <CloseOutlined /> }}
              className="rounded-lg px-4 py-2 focus:ring-0 text-sm  min-h-[48px]"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            className="mb-0"
            label={
              <span className="block text-base text-black mb-[6px]">
                Số điện thoại của bạn <span className="text-red-500">*</span>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập: Số điện thoại của bạn",
              },
              {
                pattern: /^0[0-9]{9}$/,
                message: "Bắt buộc nhập đúng: Số điện thoại của bạn",
              },
            ]}
          >
            <Input
              placeholder="Placeholder text here..."
              // allowClear={{ clearIcon: <CloseOutlined /> }}
              className="rounded-lg px-4 py-2 focus:ring-0 text-sm min-h-[48px]"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </Form.Item>
          <Form.Item name="rate" className="mb-0">
            <div className="text-center pt-2 rate-theme">
              <p className="text-sm mb-1">
                Đánh giá mức độ hài lòng khi mua sắm
              </p>

              {/* Text đổi theo số sao */}
              <p className="text-base font-medium mb-2 text-gray-600"></p>

              <Rate value={5} className="text-2xl" />
            </div>
          </Form.Item>

          <button
            className="text-center py-3 bg-[var(--theme-color)] text-white rounded-lg"
            type="submit"
          >
            Gửi ngay
          </button>
        </Form>
      </div>
    </Page>
  );
};

export default HomePage;

type TUser = {
  at: string;
  rt: string;
  location?: any;
};
