import React from "react";
import { Header, Page } from "zmp-ui";
import { PointHistoryPageContent } from "../components/PointHistoryPage";

const PointHistoryPage = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header title="Lịch sử tích điểm" className="!relative " />
      <div className="flex-1 overflow-auto bg-[#F5F7FA]">
        <PointHistoryPageContent />
      </div>
    </Page>
  );
};

export default PointHistoryPage;
