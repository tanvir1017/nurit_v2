import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="bn">
      <Head />
      <body className="font-sans overflow-x-clip  antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
