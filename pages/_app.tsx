import Navigation from "@/components/shared/navbar/navigation";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
