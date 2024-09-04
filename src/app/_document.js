// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Other head elements can be added here */}
        <script
            src="https://app.10xlaunch.ai/widget"
            data-app-id="92be7fc9-3c5c-4bd2-8e71-30778e46f3e4"
            async
            defer
            >
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
