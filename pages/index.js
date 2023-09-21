import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title key="title">Testing NextJS 12</title>
        <meta
          name="description"
          content="Learning SEO and web performance with Next.JS"
        />

        <meta property="og:url" content="https://jsm-resources.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learning Next.JS" />
        <meta
          property="og:description"
          content="Learning SEO and web performance with Next.JS"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jsm-resources.vercel.app" />
        <meta
          property="twitter:url"
          content="https://jsm-resources.vercel.app/"
        />
        <meta name="twitter:title" content="Learning Next.JS" />
        <meta
          name="twitter:description"
          content="Learning SEO and web performance with Next.JS"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg"
        />
      </Head>
      <div>{children}</div>
    </>
  );
};


function index() {
  return <Layout>Hello World!</Layout>;
}

export default index;
