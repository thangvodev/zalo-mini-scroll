import React, { useState, useEffect, useRef } from "react";
import {
  createCameraContext,
  MediaDevice,
  ZMACamera,
  FacingMode,
  PhotoFrame,
  PhotoQuality,
  PhotoFormat,
} from "zmp-sdk/apis";
import { Button } from "../common/button";
import { Radio } from "../common/radio";
import { CapturePreviewPopup } from "./capture-preview-popup";

const Content = () => {
  const cameraRef = useRef<ZMACamera | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraList, setCameraList] = useState<MediaDevice[]>([]);
  const [deviceId, setDeviceId] = useState<string>();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      console.log("Media component not ready");
      return;
    }
    if (!cameraRef.current) {
      cameraRef.current = createCameraContext({
        videoElement: videoElement,
        mediaConstraints: {
          height: 640,
          width: 480,
          facingMode: FacingMode.BACK,
          audio: false,
        },
      });
      setIsCameraReady(true);
    }
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      const camera = cameraRef.current;
      if (camera && isCameraReady) {
        await camera.start();
        const list = camera.getCameraList();
        if (list && list.length > 0) {
          setCameraList(list);
          setDeviceId(list[list.length - 1].deviceId);
        }
      }
    };

    startCamera();
  }, [isCameraReady]);

  useEffect(() => {
    if (deviceId) {
      const changeCamera = async () => {
        await cameraRef.current?.setDeviceId(deviceId);
      };

      changeCamera();
    }
  }, [deviceId]);

  const cropImageToVideoDisplay = (
    imageData: string,
    videoElement: HTMLVideoElement
  ): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          resolve(imageData);
          return;
        }

        const displayWidth = videoElement.offsetWidth;
        const displayHeight = videoElement.offsetHeight;
        const displayAspect = displayWidth / displayHeight;

        const imageWidth = img.width;
        const imageHeight = img.height;
        const imageAspect = imageWidth / imageHeight;

        let sourceX = 0;
        let sourceY = 0;
        let sourceWidth = imageWidth;
        let sourceHeight = imageHeight;

        if (imageAspect > displayAspect) {
          sourceWidth = imageHeight * displayAspect;
          sourceX = (imageWidth - sourceWidth) / 2;
        } else {
          sourceHeight = imageWidth / displayAspect;
          sourceY = (imageHeight - sourceHeight) / 2;
        }

        canvas.width = displayWidth * 2;
        canvas.height = displayHeight * 2;

        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );

        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };

      img.src = imageData;
    });
  };

  const handleTakePhoto = async () => {
    const result: PhotoFrame = cameraRef.current?.takePhoto({
      quality: PhotoQuality.NORMAL,
      format: PhotoFormat.JPEG,
      minScreenshotHeight: 1000,
    });

    if (result && videoRef.current) {
      const croppedImage = await cropImageToVideoDisplay(
        result.data,
        videoRef.current
      );
      return croppedImage;
    } else {
      console.log("No data");
      return null;
    }
  };

  return (
    <div className="size-full relative">
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline
      />

      <div className="z-10 absolute bottom-0 inset-x-0 flex flex-col gap-[20px] p-[16px] bg-black/50 rounded">
        <Radio.Group
          value={deviceId}
          items={cameraList.map((item) => ({
            label: item.label,
            value: item.deviceId,
          }))}
          render={(item) => <div className="text-white">{item?.label}</div>}
          onChange={(value) => {
            setDeviceId(value);
          }}
          className="flex flex-col gap-[10px]"
        />

        <CapturePreviewPopup>
          {({ open, setImage }) => (
            <Button
              text={<div className="text-white">Chụp ảnh</div>}
              className="w-full border border-white py-[5px]"
              onClick={async () => {
                const croppedImage = await handleTakePhoto();
                if (croppedImage) {
                  setImage(croppedImage);
                  open();
                }
              }}
            />
          )}
        </CapturePreviewPopup>
      </div>
    </div>
  );
};

export default Content;
