import React from "react";
import { Header, Page } from "zmp-ui";
import { CheckInEventPageContent } from "../components/CheckInEventPage";

const CheckInEventPage = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header
        title="Check-in event"
        className="!relative !m-0 topbar !bg-[#2CBC74]"
        textColor="white"
      />
      <div className="flex-1 overflow-auto bg-surface">
        <CheckInEventPageContent />
      </div>
    </Page>
  );
};

export default CheckInEventPage;
