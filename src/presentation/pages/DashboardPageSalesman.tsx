import React from "react";
import { Header, Page } from "zmp-ui";
import { DashboardPageSalesmanContent } from "../components/DashboardPageSalesman";

const DashboardPageSalesman = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header title="Báo cáo kết quả" className="!relative " />
      <div className="flex-1 overflow-auto bg-[#F5F7FA]">
        <DashboardPageSalesmanContent />
      </div>
    </Page>
  );
};

export default DashboardPageSalesman;
