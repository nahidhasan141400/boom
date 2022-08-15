import React, { Children } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import AuthContext from "../context/autContext";
import { ToastContainer}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Common = ({children}) => {
  return (
    <AuthContext>
        <Head>
          <title>boom food</title>
        </Head>
        <Nav />
        {children}
        <Footer />
        <div className="toast">
          <ToastContainer />
        </div>
    </AuthContext >
  )
}

export default Common