import { Html, Head, Main, NextScript } from "next/document";

/**
 * Minimal custom Document for the Pages Router runtime.
 * Required so that when Next.js exports 404/_error (Pages runtime),
 * <Html> is only used here and the "Html should not be imported outside of
 * pages/_document" prerender error is avoided.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
