import {
  App,
  GetProp,
  UploadFile,
  UploadProps as OriginalUploadProps,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Modal, Upload } from "antd";
import { RequiredFields } from "../../utils/types";

function uuidv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

import CloseFilledIcon from "../icons/CloseFilledIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import UploadIcon from "../icons/UploadIcon";

function ImageUpload(props: UploadImageProps) {
  const { message } = App.useApp();
  const { images = [], setImages, maxCount = 1 } = props;
  const [fileImageMap, setFileImageMap] = useState<Record<string, string>>({});

  const imagesWithUid = useMemo(
    () =>
      images.map((image) => {
        const uid = (image as UploadFile).uid ?? uuidv4();
        return {
          ...image,
          uid,
        };
      }),
    [images],
  );

  const onChange: OriginalUploadProps["onChange"] = ({ fileList }) => {
    setImages(fileList);
  };

  const uploadConditions = (file: FileType) => {
    if (file.type != "image/jpeg" && file.type != "image/png") {
      message.error("You can only upload JPG/PNG file!");
      return false;
    }
    if (!file.size || file.size / 1024 / 1024 > 2) {
      message.error("Image size must be smaller than 2MB!");
      return false;
    }
    return true;
  };

  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void },
  ) => {
    const fileKey = file.uid || file.name || "";
    const imageUrl = fileImageMap[fileKey] || file.url || file.preview || "";

    return (
      <div
        className="relative flex max-h-full max-w-full"
        onClick={actions.preview}
      >
        {/* Image */}
        <img
          src={imageUrl}
          className="flex-1 rounded-[3.3px] object-cover object-center"
        />

        {/* Edit image button */}
        {props.maxCount === 1 && props.editable ? (
          <div
            className="absolute bottom-0 right-0 z-10 translate-x-1/2 translate-y-1/2"
            style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
            onClick={(e) => {
              e.stopPropagation();
              const fileInput = document.querySelector(
                '.ant-upload input[type="file"]',
              ) as HTMLInputElement;
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            <AddCircleIcon />
          </div>
        ) : null}

        {/* Remove image button */}
        {!props.disabled ? (
          <div
            className="absolute right-0 top-0 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-gray-300"
            style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
            onClick={(e) => {
              e.stopPropagation();
              actions.remove();
            }}
          >
            <CloseFilledIcon className="size-[20px] text-white" />
          </div>
        ) : null}
      </div>
    );
  };

  const wrappedItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: any,
  ) => {
    if (props.customItemRender) {
      return props.customItemRender({
        maxCount: props.maxCount,
        originNode,
        file,
        fileList,
        actions,
      });
    }
    return customItemRender(originNode, file, fileList, actions);
  };

  return (
    <UploadImg
      fileListLength={images.length}
      listType="picture-card"
      maxCount={maxCount}
      fileList={imagesWithUid}
      onChange={onChange}
      uploadConditions={uploadConditions}
      itemRender={wrappedItemRender}
      fileImageMap={fileImageMap}
      setFileImageMap={setFileImageMap}
      {...props}
    />
  );
}

function UploadImg({
  className,
  fileImageMap,
  setFileImageMap,
  ...props
}: UploadProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // Store images when list updates
  useEffect(() => {
    const processFiles = async () => {
      const newImageMap: Record<string, string> = {};

      for (const file of props.fileList || []) {
        const fileKey = file.uid || file.name || "";

        if (file.url) {
          newImageMap[fileKey] = file.url;
        } else if (file.originFileObj && !file.preview) {
          try {
            const base64 = await getBase64(file.originFileObj as FileType);
            file.preview = base64;
            newImageMap[fileKey] = base64;
          } catch (error) {
            console.error("Error processing file:", error);
          }
        } else if (file.preview) {
          newImageMap[fileKey] = file.preview;
        }
      }

      setFileImageMap(newImageMap);
    };

    if (props.fileList && props.fileList.length > 0) {
      processFiles();
    }
  }, [props.fileList]);

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file: FileType) => {
    if (props.uploadConditions && !props.uploadConditions(file)) {
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    const fileKey = file.uid || file.name || "";
    let imageUrl = fileImageMap[fileKey];

    if (!imageUrl) {
      if (file.url) {
        imageUrl = file.url;
      } else if (file.originFileObj) {
        try {
          imageUrl = await getBase64(file.originFileObj as FileType);
          file.preview = imageUrl;
        } catch (error) {
          console.error("Error processing file for preview:", error);
          return;
        }
      } else if (file.preview) {
        imageUrl = file.preview;
      }
    }

    setPreviewImage(imageUrl || "");
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        file.url!.substring(file.url!.lastIndexOf("/") + 1).split("?")[0],
    );
  };

  return (
    <>
      <Upload
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        accept="image/png, image/jpeg"
        multiple
        itemRender={props.itemRender}
        className={"customSizedUpload".concat(className ? ` ${className}` : "")}
        {...props}
      >
        {props.fileListLength < props.maxCount
          ? props.uploadButton || (
              <div className="flex h-[80px] w-[100px] flex-col items-center justify-center gap-[8px] rounded-[4px] border border-dashed border-gray3 px-[12px]">
                <UploadIcon className="text-blueB60 size-[16px]" />
                <div className="text-blueB60 text-center text-xs font-normal">
                  Tải ảnh lên
                </div>
              </div>
            )
          : null}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}

type FileType = Parameters<GetProp<OriginalUploadProps, "beforeUpload">>[0];
export type UploadImage = Omit<UploadFile, "uid">;
export type CustomItemRender = (params: {
  maxCount?: number;
  originNode: React.ReactElement;
  file: UploadFile;
  fileList: UploadFile[];
  actions: { download: () => void; preview: () => void; remove: () => void };
}) => React.ReactNode;

type UploadImageProps = Omit<OriginalUploadProps, "itemRender"> & {
  images: UploadImage[] | UploadFile[];
  setImages: (images: UploadImage[]) => void;
  maxCount?: OriginalUploadProps["maxCount"];
  uploadButton?: React.ReactNode;
  customItemRender?: CustomItemRender;
  editable?: boolean;
};

type UploadProps = RequiredFields<
  Omit<OriginalUploadProps, "beforeUpload" | "onPreview" | "accept">,
  "listType" | "maxCount"
> & {
  uploadConditions?: (file: FileType) => boolean;
  fileListLength: number;
  uploadButton?: React.ReactNode;
  fileImageMap: Record<string, string>;
  setFileImageMap: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export { ImageUpload };
