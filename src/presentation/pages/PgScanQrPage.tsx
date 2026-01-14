import React from "react";
import { Header, Page } from "zmp-ui";
import { PgScanQrPageContent } from "../components/PgScanQrPage";
import Logo from "../static/logo.png";

const PgScanQrPage = () => {
  return (
    <Page className="flex-1  bg-white">
      <Header
        title={
          (<img src={Logo} className="h-[14.77px]" />) as unknown as string
        }
        className="!relative !m-0 topbar"
        style={{
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
        showBackIcon={false}
      />
      <div className="flex-1 overflow-auto">
        <PgScanQrPageContent />
      </div>
    </Page>
  );
};

export default PgScanQrPage;
