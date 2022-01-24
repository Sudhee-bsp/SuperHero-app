import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} /> <Footer />
    </Layout>
  );
}

export default MyApp;
