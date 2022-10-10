import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

// 일종의 root div 같은 느낌
function _app({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default _app;
