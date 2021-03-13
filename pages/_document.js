import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import SEO from '../next-seo.config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  componentDidMount() {

  function onConversationsAPIReady() {
    console.log(`HubSpot Conversations API: ${window.HubSpotConversations}`);
  }

  if (window.HubSpotConversations) {
    onConversationsAPIReady();
  } else {
    /*
      Otherwise, callbacks can be added to the hsConversationsOnReady on the window object.
      These callbacks will be called once the external API has been initialized.
    */
    window.hsConversationsOnReady = [onConversationsAPIReady];
  }

  if (window.HubSpotConversations) {
    console.log('The api is ready already');
  } else {
    window.hsConversationsOnReady = [
      () => {
        console.log('Now the api is ready');
      },
    ];
  }

  }
  render() {
    const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Paste your GTAG here

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="shortcut icon"
            href={require("assets/img/brand/favicon.ico")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/brand/apple-icon.png")}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body className="text-gray-800 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7572988.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
