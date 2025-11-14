import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Header, Page } from "zmp-ui";
import { getAccessToken, getLocation } from "zmp-sdk/apis";

const KEY = "4a9LVONYkAWHDPNLR7F1";
const APP_ID = "178197451477352177";

const HomePage: FC = () => {
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
        <div className="break-all">Access token: {user?.at}</div>
        <div className="break-all">Refresh token: {user?.rt}</div>
        <div className="break-all">
          Location: {JSON.stringify(user?.location?.data)}
        </div>
        <div className="flex gap-4">
          <button onClick={() => getToken()}>Get Access Token</button>
          <button onClick={() => refreshZaloToken()}>Refresh token</button>
          <button onClick={() => geUsertLocation()}>Get location</button>
        </div>
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
