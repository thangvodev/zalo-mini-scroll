import React from "react";
import { Header, Page } from "zmp-ui";
import { OrderDetailsPageContent } from "../components/OrderDetailsPage";

const OrderDetailsPage = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header title="Đơn hàng" className="!relative " />
      <div className="flex-1 overflow-auto">
        <OrderDetailsPageContent />
      </div>
    </Page>
  );
};

export default OrderDetailsPage;
