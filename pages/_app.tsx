import Footer from "@/components/shared/footer/footer";
import Navigation from "@/components/shared/navbar/navigation";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  useEffect(() => storePathValues, [router.asPath]);
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath as string);
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress color="#ff2c45" />
      <div style={{ opacity: 1 }}>
        {!pathname.includes("/auth") && !pathname.includes("/dashboard") && (
          <Navigation />
        )}
        <Component {...pageProps} />
        {!pathname.includes("/auth") && !pathname.includes("/dashboard") && (
          <Footer />
        )}
      </div>
    </ThemeProvider>
  );
}
