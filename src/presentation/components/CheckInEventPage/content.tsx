import React, { useState } from "react";
import { Banner } from "./banner";
import { QRContainer } from "./qr-container";
import { Title } from "./title";
import { GuestInformation } from "./guest-information";
import { EventInformation } from "./event-information";
import { FloatButton } from "./float-button";

const Content = () => {
  const [status, setStatus] = useState<TStatus>("unconfirmed");

  return (
    <div className="flex flex-col size-full gap-[16px] relative">
      <div className="flex flex-col gap-[12px]">
        <div className="relative mb-[80px]">
          <Banner />
          <QRContainer />
        </div>
        <Title status={status} />
      </div>
      <div className="flex flex-col gap-[16px] px-[12px]">
        <GuestInformation />
        <EventInformation />
      </div>
      <FloatButton status={status} setStatus={setStatus} />
    </div>
  );
};

export default Content;

type TStatus = "unconfirmed" | "confirmed" | "finished";
