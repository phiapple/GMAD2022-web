import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

function Atalks() {
  return (
    <>
      <div>
        <Head>
          <title>GMAD 2022</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <div>haloo ini Atalks</div>
      <div>haloo ini Atalks</div>
      <div>haloo ini Atalks</div>
      <div>haloo ini Atalks</div>
    </>
  );
}

Atalks.getInitialProps = async (ctx) => {
  return {};
};

export default Atalks;
