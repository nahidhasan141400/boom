import React, { Children } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";


const Common = ({children}) => {
  return (
    <>
        <Head>
          <title>boom food</title>
        </Head>
        <Nav />
        {children}
        <Footer />
    </>
  )
}

export default Common