import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SUPERHERO | BSP</title>
      </Head>
      <Layout>
        {" "}
        <Component {...pageProps} /> <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
