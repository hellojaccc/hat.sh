/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import "../public/assets/styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{"hat.sh - simple, fast, secure client-side file encryption"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Encrypt and Decrypt files securely in your browser."
        />
        <meta
          name="Keywords"
          content="encrypt decrypt encryption file-encryption javascript client-side serverless decryption xchcha20 argon2id encryption-decryption webcrypto crypto browser in-browser"
        />
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="hat.sh">
        <link rel="apple-touch-icon" href="/public/assets/images/logo2.png">
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
