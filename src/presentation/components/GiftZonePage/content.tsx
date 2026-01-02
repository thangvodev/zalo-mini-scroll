import React from "react";
import { Card } from "./card";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Receipt } from "./receipt";
import { OrderDetails } from "./order-details";
import { SharePost } from "./share-post";
import { StarOutlined } from "@ant-design/icons";
import { Checkbox } from "../common/checkbox";
import { FloatButton } from "./float-button";
import { ShopPicker } from "./shop-picker";
import { ShareLocationJoin } from "./share-location-join";
import { LuckyWheel } from "./lucky-wheel";
import { PhoneVerification } from "./phone-verification";
import { ShopTicketBatch } from "./shop-ticket-batch";
import { ShareLink } from "./share-link";
import { RequestFollowOA } from "./request-follow-oa";
import { ShareLocation } from "./share-locations";
import { FollowOA } from "./follow-oa";
import { TNC } from "./tnc";
import { TakePhoto } from "./take-photo";
import { PhotoSlideshow } from "./photo-slideshow";
import { Video } from "./video";
import { FileUpload } from "./file-upload";
import { QRGenerator } from "./qr-generator";
import { Voucher } from "./voucher";
import BannerImg from "../../static/banner.jpg";
import BarCode from "../../static/bar-code.png";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <>
      <div className="flex flex-col gap-[24px] py-[16px]">
        <TakePhoto />
        <PhotoSlideshow />
        <Video />
        <FileUpload />
        <QRGenerator />
        <Voucher barCode={BarCode} />
        <Voucher banner={BannerImg} />
        <ShopPicker form={form} />
        <ShareLocationJoin form={form} />
        <LuckyWheel />
        <PhoneVerification form={form} />
        <ShopTicketBatch form={form} />
        <Receipt />
        <OrderDetails />
        <ShareLink />
        <SharePost />
        <RequestFollowOA />
        <ShareLocation />
        <FollowOA />
        <TNC />
      </div>
      <FloatButton />
    </>
  );
};

export default Content;
