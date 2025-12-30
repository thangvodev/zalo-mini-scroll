import React, { useEffect, useRef, useState } from "react";
import { Button } from "../common/button";
import { Radio } from "../common/radio";
import { CapturePreviewPopup } from "./capture-preview-popup";
import { Camera, TCameraBoxConfigs, TCameraHandle } from "../common/camera";
import { MediaDevice } from "zmp-sdk/apis";
import { ScanOverlay } from "./scan-overlay";
import { Checkbox } from "../common/checkbox";

const Content = () => {
  const cameraRef = useRef<TCameraHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cameraList, setCameraList] = useState<MediaDevice[]>([]);
  const [deviceId, setDeviceId] = useState<string>();
  const [scanBoxConfig, setScanBoxConfig] =
    useState<TCameraBoxConfigs["boxConfig"]>();
  const [isScan, setIsScan] = useState<boolean>(true);

  useEffect(() => {
    if (!isScan) {
      setScanBoxConfig(undefined);
      return;
    }

    const updateScanBox = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const boxWidth = containerWidth * 0.95;
        const boxHeight = containerHeight * 0.85;

        const left = (containerWidth - boxWidth) / 2;
        const top = (containerHeight - boxHeight) / 2;

        setScanBoxConfig({
          width: boxWidth,
          height: boxHeight,
          top: top,
          left: left,
        });
      }
    };

    updateScanBox();
    window.addEventListener("resize", updateScanBox);

    return () => window.removeEventListener("resize", updateScanBox);
  }, [isScan]);

  return (
    <div className="size-full flex flex-col">
      <div ref={containerRef} className="relative flex-1">
        <Camera
          ref={cameraRef}
          onCameraListChange={setCameraList}
          onDeviceIdChange={setDeviceId}
          deviceId={deviceId}
        />
        <ScanOverlay
          boxConfig={scanBoxConfig}
          helperArea={(configs) => {
            const { top, left } = configs.boxConfig ?? {};

            return (
              <div
                style={{
                  position: "absolute",
                  top: top,
                  bottom: top,
                  left: left,
                  right: left,
                }}
              >
                <div className="pb-[20px] flex justify-center items-end size-full">
                  <div className="text-red-500 px-[10px] py-[5px] bg-white rounded-[4px]">
                    Chưa hợp lệ, vui lòng chụp lại
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>

      <div className="flex flex-col justify-between gap-[10px] h-[200px] p-[16px] bg-white">
        <Checkbox
          checked={isScan}
          onChange={(e) => setIsScan(e.target.checked)}
        >
          Scan
        </Checkbox>
        <Radio.Group
          value={deviceId}
          items={cameraList.map((item) => ({
            label: item.label,
            value: item.deviceId,
          }))}
          render={(item) => <div className="text-black">{item?.label}</div>}
          onChange={(value) => {
            setDeviceId(value);
          }}
          className="flex flex-col gap-[10px]"
        />

        <CapturePreviewPopup>
          {({ open, setImage }) => (
            <Button
              text={<div className="text-black">Chụp ảnh</div>}
              className="w-full border border-black py-[5px] flex-none"
              onClick={async () => {
                const croppedImage = await cameraRef.current?.takePhoto({
                  boxConfig: scanBoxConfig,
                });
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
