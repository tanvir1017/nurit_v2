import Footer from "@/components/shared/footer/footer";
import Navigation from "@/components/shared/navbar/navigation";
import ContextProvider from "@/lib/context/contextProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath as string);
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  useEffect(() => storePathValues, [router.asPath]);

  return (
    <ContextProvider>
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        // forcedTheme={(Component?.theme as string) || null}
      >
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
    </ContextProvider>
  );
}
