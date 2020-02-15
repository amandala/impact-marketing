import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400|Roboto+Slab:100,200,300,400&display=swap"
            rel="stylesheet"
          ></link>
          <link href="/styles/styles.module.scss" rel="stylesheet"></link>
        </Head>

        <body>
          <Main randomProp />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
