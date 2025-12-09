import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Header, Page } from "zmp-ui";
import { HomePageContent } from "../components/DuluxMiniDBSell";

const HomePage: FC = () => {
  return (
    <Page className="flex-1  bg-white">
      <Header title="a" className="!relative" />
      <div className="flex-1 overflow-auto px-[16px] flex flex-col gap-4">
        <HomePageContent />
      </div>
    </Page>
  );
};

export default HomePage;

type TUser = {
  at: string;
  rt: string;
  location?: any;
};
