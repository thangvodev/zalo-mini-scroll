import React from "react";
import { Header, Page } from "zmp-ui";
import { CHeckInEventHistoryPageContent } from "../components/CheckInEventHistoryPage";

const CheckInEventHistoryPage = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header
        title="Lịch sử check-in sự kiện"
        className="!relative !m-0 topbar !bg-[#2CBC74]"
        textColor="white"
      />
      <div className="flex-1 overflow-auto bg-surface">
        <CHeckInEventHistoryPageContent />
      </div>
    </Page>
  );
};

export default CheckInEventHistoryPage;
