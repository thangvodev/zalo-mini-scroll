/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, Box, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { ToastContainer } from "react-toastify";
import HomePage from "./presentation/pages/PgScanQrPage";

import { AppProvider } from "./presentation/context/AppContext";
import OrderSupportPage from "./presentation/pages/OrderSupportPage";
import OrderDetailsPage from "./presentation/pages/OrderDetailsPage";
import PointHistoryPage from "./presentation/pages/PointHistoryPage";
import DashboardPageCustomer from "./presentation/pages/DashboardPageCustomer";
import DashboardPageSalesman from "./presentation/pages/DashboardPageSalesman";
import PgScanQrPage from "./presentation/pages/PgScanQrPage";
import CheckInEventPage from "./presentation/pages/CheckInEventPage";
import CheckInEventHistoryPage from "./presentation/pages/CheckInEventHistoryPage";

const AppRoutes = () => {
  return (
    <AnimationRoutes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/order-support" element={<OrderSupportPage />}></Route>
      <Route path="/orders/:orderId" element={<OrderDetailsPage />}></Route>
      <Route path="/point-history" element={<PointHistoryPage />}></Route>
      <Route
        path="/report-customer"
        element={<DashboardPageCustomer />}
      ></Route>
      <Route
        path="/report-salesman"
        element={<DashboardPageSalesman />}
      ></Route>
      <Route path="/pg-scan" element={<PgScanQrPage />}></Route>
      <Route path="/checkin" element={<CheckInEventPage />}></Route>
      <Route
        path="/checkin-history"
        element={<CheckInEventHistoryPage />}
      ></Route>
    </AnimationRoutes>
  );
};

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AppProvider>
              <Box flex flexDirection="column" className="h-screen">
                <Box className="flex-1 flex flex-col overflow-hidden">
                  <AppRoutes />
                  <ToastContainer style={{ marginTop: "48px" }} />
                </Box>
              </Box>
            </AppProvider>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
