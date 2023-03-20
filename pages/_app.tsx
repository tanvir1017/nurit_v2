import Footer from "@/components/shared/footer/footer";
import Navigation from "@/components/shared/navbar/navigation";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress color="#ff2c45" />
      <div style={{ opacity: 1 }}>
        {pathname !== "/login" &&
          pathname !== "/signing" &&
          !pathname.includes("/dashboard") && <Navigation />}
        <Component {...pageProps} />
        {pathname !== "/login" &&
          pathname !== "/signing" &&
          !pathname.includes("/dashboard") && <Footer />}
      </div>
    </ThemeProvider>
  );
}
