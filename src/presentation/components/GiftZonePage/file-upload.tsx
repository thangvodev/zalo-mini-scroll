import React from "react";
import { Card } from "./card";
import { Upload, UploadFile } from "antd";
import UploadFileIcon from "../../static/upload-file.png";

const fileList: UploadFile[] = [
  {
    uid: "0",
    name: "xxx.png",
    status: "uploading",
    percent: 33,
  },
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "zzz.png",
    status: "error",
  },
];

const FileUpload = () => {
  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void }
  ) => {
    return (
      <div
        className="relative flex flex-col max-h-full max-w-full"
        onClick={actions.preview}
      >
        {originNode}
      </div>
    );
  };

  return (
    <Card size="medium">
      <div className="flex flex-col gap-[4px] items-center">
        <div className="text-base font-semibold">Upload file title</div>
        <div className="text-gray7 font-normal text-xs">Description</div>
      </div>
      <Upload.Dragger
        listType="picture"
        defaultFileList={fileList}
        itemRender={customItemRender}
      >
        <div className="flex flex-col gap-[12px] items-center p-[24px]">
          <img
            src={UploadFileIcon}
            alt=""
            className="size-[48px] object-contain"
          />
          <div className="flex flex-col gap-[8px]">
            <div className="text-base font-medium text-purple6">
              Tải file lên
            </div>
            <div className="text-gray7 font-normal text-xs">
              Max file size: 25MB
            </div>
          </div>
        </div>
      </Upload.Dragger>
    </Card>
  );
};

export { FileUpload };
