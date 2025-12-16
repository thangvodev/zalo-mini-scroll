import React from "react";
import { Header, Page } from "zmp-ui";
import { DashboardPageCustomerContent } from "../components/DashboardPageCustomer";

const DashboardPageCustomer = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header title="Báo cáo kết quả" className="!relative " />
      <div className="flex-1 overflow-auto bg-blue1">
        <DashboardPageCustomerContent />
      </div>
    </Page>
  );
};

export default DashboardPageCustomer;
