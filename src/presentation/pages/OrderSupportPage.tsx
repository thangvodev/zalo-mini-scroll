import React from "react";
import { Header, Page } from "zmp-ui";
import { OrderSupportPageContent } from "../components/OrderSupportPage";

const OrderSupportPage = () => {
  return (
    <Page className="flex-1 flex flex-col bg-white">
      <Header title="Hỗ trợ đặt hàng" className="!relative " />
      <div className="flex-1 overflow-auto">
        <OrderSupportPageContent />
      </div>
    </Page>
  );
};

export default OrderSupportPage;
