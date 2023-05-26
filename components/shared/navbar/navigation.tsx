/* eslint-disable react-hooks/exhaustive-deps */
import useShare from "@/lib/context/useShare";
import { fetcher } from "@/lib/fetcher";
import { largeNavigationData } from "@/util/localDb/navLink";
import { largeNavigationDataType } from "@/util/types/clientType";
import { ShareContextType } from "@/util/types/types";
import { motion as m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import LightModeBrand from "../brand";
import { Dropdown } from "../headlessui/headLessUi";
interface TokenDataType {
  id: string;
  email__id: string;
  role: string;
  iat: number;
}

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState(true);
  const [tokenData, setTokenData] = useState<any | null>(null);

  // prevent the unconditional function call and reduce re-renders
  const filterTheNavigation = useCallback(
    (nav: largeNavigationDataType, tokenData: TokenDataType) => {
      return nav.filter((tab) =>
        !tokenData ? tab : tab.id !== nav.length - 1
      );
    },
    []
  );
  // Memoized the value of which function return
  const filterNav = useMemo(
    () => filterTheNavigation(largeNavigationData, tokenData),
    [tokenData]
  );

  // Dark 🌜 & light ☀️ variant
  const { resolvedTheme, setTheme } = useTheme();

  // extract value from  context api
  const { allContext } = useShare() as ShareContextType;
  const { data, error, isLoading, mutate } = allContext;

  // Calling the api and extract data from the api
  const {
    data: loggedData,
    isLoading: isLoggedUserLoading,
    error: isLoggedUserHasError,
  } = useSWR(
    `/api/auth/user-at?email=${data?.verifiedToken?.email__id}`,
    fetcher
  );

  // Set some sort of value to the state after the page would render
  useEffect(() => {
    setMounted(true);
    if (!isLoading && !error) {
      setTokenData(data?.verifiedToken as any);
    } else {
      setTokenData(null);
    }
  }, [data?.verifiedToken, error, isLoading]);

  // If  page not mounted then return null
  if (!mounted) {
    return null;
  }

  //  Theme controlling toggle switch
  const handleThemeControl = () => {
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(true);
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="border-[#68696c00]/50 z-50 sticky top-0 border-b bg-slate-50/60 dark:text-white backdrop-blur-2xl transition-colors duration-500 dark:bg-[#68696c00]  font-HSRegular hidden lg:block">
      <div className="container">
        <div className="relative h-20  flex items-center justify-between">
          <LightModeBrand />
          <ul className="flex items-center space-x-4">
            {filterNav.map((tab) => (
              <Link href={tab.path as string} key={tab.id}>
                <li
                  className={`${
                    pathname.includes(tab.path as string)
                      ? ""
                      : "dark:hover:text-white/60 hover:text-gray-700"
                  } relative rounded-full px-3 py-1.5  text-sm font-medium dark:text-white outline-sky-400 transition focus-visible:outline-2 cursor-pointer`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {pathname.includes(tab.path as string) && (
                    <m.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-[var(--red-primary-brand-color)] mix-blend-plus-lighter"
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {tab.routeName}
                </li>
              </Link>
            ))}
            <>
              {tokenData && (
                <Dropdown
                  tokenData={tokenData}
                  setTokenData={setTokenData}
                  mutate={mutate}
                  loggedData={loggedData}
                  isLoggedUserLoading={isLoggedUserLoading}
                  isLoggedUserHasError={isLoggedUserHasError}
                />
              )}
            </>
            {mounted && (
              <m.li
                className="cursor-pointer border rounded-full  bg-gray-800 relative overflow-hidden mr-4 my-2 w-14 h-6"
                onClick={handleThemeControl}
              >
                <Image
                  className={`absolute mt-[1px]  ${
                    toggle ? "ml-1 duration-300" : "ml-7 duration-300"
                  }`}
                  width={20}
                  height={20}
                  src={
                    resolvedTheme === "dark"
                      ? "/icons/sun.svg"
                      : "/icons/moon.svg"
                  }
                  alt={
                    resolvedTheme === "dark" ? "Moon svg icon" : "Sun svg icon"
                  }
                />
              </m.li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
