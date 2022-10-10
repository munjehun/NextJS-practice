import React from "react";
import Head from "next/head"; //페이지 제목

function Title({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

export default Title;
