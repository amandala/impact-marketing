import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400|Roboto+Slab:100,200,300,400&display=swap"
          rel="stylesheet"
        ></link>
        <body>
          <Main randomProp />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
