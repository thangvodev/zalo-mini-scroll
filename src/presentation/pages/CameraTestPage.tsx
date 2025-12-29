import React from "react";
import { Header, Page } from "zmp-ui";
import { CameraPageContent } from "../components/CameraTestPage";

const CameraTestPage = () => {
  return (
    <Page className="flex flex-col  bg-white">
      <Header title="a" className="!relative" />
      <div className="flex-1 overflow-auto">
        <CameraPageContent />
      </div>
    </Page>
  );
};

export default CameraTestPage;
