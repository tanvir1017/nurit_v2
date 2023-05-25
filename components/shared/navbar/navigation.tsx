import useShare from "@/lib/context/useShare";
import { fetcher } from "@/lib/fetcher";
import { largeNavigationData } from "@/util/localDb/navLink";
import { ShareContextType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import LightModeBrand from "../brand";
import { Dropdown } from "../headlessui/headLessUi";
let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(largeNavigationData[0].id);
  const [toggle, setToggle] = useState(true);
  const [tokenData, setTokenData] = useState<any | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const { allContext } = useShare() as ShareContextType;
  const { data, error, isLoading, mutate } = allContext;
  const {
    data: loggedData,
    isLoading: isLoggedUserLoading,
    error: isLoggedUserHasError,
  } = useSWR(
    `/api/auth/user-at?email=${data?.verifiedToken?.email__id}`,
    fetcher
  );

  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    setMounted(true);
    if (!isLoading && !error) {
      setTokenData(data?.verifiedToken as any);
    } else {
      setTokenData(null);
    }
  }, [data?.verifiedToken, error, isLoading]);

  if (!mounted) {
    return null;
  }

  // COMMENT : => Theme controlling toggle switch
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
          <ul className="flex items-center  space-x-4 ">
            {largeNavigationData
              .filter((tab) =>
                !tokenData ? tab : tab.id !== largeNavigationData.length - 1
              )
              .map((tab) => (
                <Link href={tab.path as string} key={tab.id}>
                  <li
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id ? "" : "hover:text-white/60"
                    } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2 cursor-pointer`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {activeTab === tab.id && (
                      <m.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-[var(--red-primary-brand-color)] text-white mix-blend-plus-lighter"
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
