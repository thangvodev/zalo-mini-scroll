import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";

const CapturePreviewPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>();

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true), setImage: setImage })}
      {createPortal(
        <Modal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
          modalStyle={{
            borderRadius: "0",
            overflow: "visible",
            minWidth: "100%",
            minHeight: "100%",
            padding: 0,
          }}
        >
          <div
            className="relative flex items-end"
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* Image */}
            <img src={image} alt="" className="" />
            {/* Float Buttons */}
            <div className="z-10 absolute bottom-0 inset-x-0 flex flex-col gap-[20px] p-[16px] bg-black/50 rounded">
              <Button
                text={<div className="text-white">Chụp lại</div>}
                className="w-full border border-white py-[5px]"
                onClick={handleCancel}
              />
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

type Props = {
  children: (methods: {
    open: () => void;
    setImage: (image: string) => void;
  }) => React.ReactNode;
};

export { CapturePreviewPopup };
