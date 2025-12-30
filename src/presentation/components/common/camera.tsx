import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  createCameraContext,
  MediaDevice,
  ZMACamera,
  FacingMode,
  PhotoFrame,
  PhotoQuality,
  PhotoFormat,
} from "zmp-sdk/apis";

const Camera = forwardRef<TCameraHandle, TCameraProps>(
  ({ onCameraListChange, onDeviceIdChange, deviceId }, ref) => {
    const cameraRef = useRef<ZMACamera | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isCameraReady, setIsCameraReady] = useState(false);

    useImperativeHandle(ref, () => ({
      takePhoto: handleTakePhoto,
    }));

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
            onCameraListChange?.(list);
            onDeviceIdChange?.(list[list.length - 1].deviceId);
          }
        }
      };

      startCamera();
    }, [isCameraReady, onCameraListChange, onDeviceIdChange]);

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
      videoElement: HTMLVideoElement,
      configs?: TCameraBoxConfigs
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

          let offsetX = 0;
          let offsetY = 0;
          let croppedImgWidth = imageWidth;
          let croppedImgHeight = imageHeight;

          // Crop the source image so that displayAspect == imageAspect
          if (imageAspect > displayAspect) {
            croppedImgWidth = imageHeight * displayAspect;
            offsetX = (imageWidth - croppedImgWidth) / 2;
          } else {
            croppedImgHeight = imageWidth / displayAspect;
            offsetY = (imageHeight - croppedImgHeight) / 2;
          }

          // For higher resolution img export
          canvas.width = displayWidth * 2;
          canvas.height = displayHeight * 2;

          // Bounding box configured
          if (configs?.boxConfig) {
            const { width, height, top, left } = configs.boxConfig;

            const scaleX = croppedImgWidth / displayWidth;
            const scaleY = croppedImgHeight / displayHeight;

            offsetX += left * scaleX;
            offsetY += top * scaleY;
            croppedImgWidth = width * scaleX;
            croppedImgHeight = height * scaleY;

            // For higher resolution img export
            canvas.width = width * 2;
            canvas.height = height * 2;
          }

          ctx.drawImage(
            img,
            offsetX,
            offsetY,
            croppedImgWidth,
            croppedImgHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );

          resolve(canvas.toDataURL("image/jpeg", 1));
        };

        img.src = imageData;
      });
    };

    const handleTakePhoto = async (configs?: TCameraBoxConfigs) => {
      const result: PhotoFrame = cameraRef.current?.takePhoto({
        quality: PhotoQuality.NORMAL,
        format: PhotoFormat.JPEG,
        minScreenshotHeight: 1000,
      });

      if (result && videoRef.current) {
        const croppedImage = await cropImageToVideoDisplay(
          result.data,
          videoRef.current,
          configs
        );
        return croppedImage;
      } else {
        console.log("No data");
        return null;
      }
    };

    return (
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline
      />
    );
  }
);

Camera.displayName = "Camera";

export { Camera };

export type TCameraHandle = {
  takePhoto: (configs?: TCameraBoxConfigs) => Promise<string | null>;
};

type TCameraProps = {
  onCameraListChange?: (list: MediaDevice[]) => void;
  onDeviceIdChange?: (deviceId: string) => void;
  deviceId?: string;
};

export type TCameraBoxConfigs = {
  boxConfig?: {
    width: number;
    height: number;
    top: number;
    left: number;
  };
  helperArea?: (configs: TCameraBoxConfigs) => React.ReactNode;
};
