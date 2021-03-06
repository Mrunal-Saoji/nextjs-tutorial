import React from "react";
import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "DJ Events",
  description: "Find the lastest DJ events",
  keywords: "music,dj",
};

export default Layout;
