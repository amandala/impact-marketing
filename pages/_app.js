import App from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/styles.module.scss"; // global styles and overrides

function MyApp({ Component, pageProps, ...rest }) {
  return (
    <div className={styles.Main}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
