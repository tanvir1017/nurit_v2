import Footer from "@/components/shared/footer/footer";
import MobileNav from "@/components/shared/navbar/mobileNav";
import Navigation from "@/components/shared/navbar/navigation";
import ContextProvider from "@/lib/context/contextProvider";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    const currentPath = globalThis.location.pathname;
    if (prevPath !== currentPath) {
      storage.setItem("prevPath", prevPath as string);
      storage.setItem("currentPath", globalThis.location.pathname);
    } else {
      storage.setItem("prevPath", "/");
      storage.setItem("currentPath", globalThis.location.pathname);
    }
  }
  useEffect(() => storePathValues, [router.asPath]);
  const notAllowNav = [
    "/auth/login",
    "/auth/verify-your-email",
    "/auth/signing",
    "/dashboard/home",
    "/dashboard/posts",
    "/dashboard/users",
    "/dashboard/courses",
    "/_error",
    "/401",
  ];
  const notAllowFooter = [
    "/auth/login",
    "/auth/verify-your-email",
    "/auth/signing",
    "/dashboard/home",
    "/dashboard/posts",
    "/dashboard/users",
    "/dashboard/courses",
    "/_error",
    "/401",
  ];
  // added clerk public key
  const isNavigationShowForPage = notAllowNav.includes(pathname);
  const isFooterShowForPage = notAllowFooter.includes(pathname);
  return (
    <ContextProvider>
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        // forcedTheme={Component?.theme || undefined}
      >
        <ToastContainer transition={Bounce} hideProgressBar />
        <NextNProgress color="#ff2c45" />
        <div style={{ opacity: 1 }}>
          {!isNavigationShowForPage && (
            <>
              <Navigation />
              <MobileNav />
            </>
          )}
          <Toaster position="bottom-center" reverseOrder={true} />
          <Component {...pageProps} />
          <Analytics />
          {!isFooterShowForPage && <Footer />}
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}
