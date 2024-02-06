// import "../styles/global.css";

import React from "react";
import { MainLayout } from "@/organisms";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

// type requireAuth = Boolean;

const App = ({ Component, pageProps }: AppProps) => {
  // console.log("Component:==>", Component);
  // console.log("var:==>", Component.requireAuth);
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
