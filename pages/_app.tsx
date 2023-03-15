import Navigation from "@/components/shared/navbar/navigation";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {pathname !== "/login" && pathname !== "/signing" && <Navigation />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
