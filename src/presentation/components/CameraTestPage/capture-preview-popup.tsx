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
          <div className="flex flex-col justify-end h-screen w-screen">
            {/* Image */}
            <img src={image} alt="" className="object-contain" />
            {/* Float Buttons */}
            <div className="p-[16px] bg-white flex flex-col items-center justify-end h-[200px]">
              <Button
                text={<div className="text-black">Chụp lại</div>}
                className="w-full border border-black py-[5px] flex-none"
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
