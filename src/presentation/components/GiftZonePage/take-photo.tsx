import React, { useState } from "react";
import { Card } from "./card";
import { ImageUpload, UploadImage } from "../common/image-upload";
import CameraIcon from "../../static/camera.png";

const TakePhoto = () => {
  const [images, setImages] = useState<UploadImage[]>([]);

  return (
    <Card size="medium">
      <div className="flex flex-col gap-[4px]">
        <div className="text-base font-semibold">Take photo title</div>
        <div className="text-gray7 text-xs font-normal">Description</div>
      </div>
      <ImageUpload
        images={images}
        setImages={setImages}
        uploadButton={
          <div className="border border-purple5 bg-[#F2EFF980] rounded-[12px] border-dashed p-[12px] flex flex-col gap-[8px] items-center ">
            <img
              src={CameraIcon}
              alt=""
              className="size-[32px] object-contain"
            />
            <div className="text-gray7 font-normal text-xs whitespace-nowrap">
              Chụp ảnh
            </div>
          </div>
        }
      />
    </Card>
  );
};

export { TakePhoto };
