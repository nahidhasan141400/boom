import React, { Children } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import AuthContext from "../context/autContext";


const Common = ({children}) => {
  return (
    <AuthContext>
        <Head>
          <title>boom food</title>
        </Head>
        <Nav />
        {children}
        <Footer />
    </AuthContext>
  )
}

export default Common