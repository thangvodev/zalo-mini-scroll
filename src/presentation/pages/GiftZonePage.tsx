import React from "react";
import { Header, Page } from "zmp-ui";
import { GiftZonePageContent } from "../components/GiftZonePage";

const GiftZonePage = () => {
  return (
    <Page className="flex flex-col  bg-white">
      <Header title="a" className="!relative" />
      <div className="flex-1 overflow-auto">
        <GiftZonePageContent />
      </div>
    </Page>
  );
};

export default GiftZonePage;
