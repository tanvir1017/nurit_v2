import useShare from "@/lib/context/useShare";
import { largeNavigationData } from "@/util/localDb/navLink";
import { ShareContextType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LightModeBrand from "../brand";
import { Dropdown } from "../headlessui/headLessUi";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [tokenData, setTokenData] = useState<any | null>(null);
  const [delay, setDelay] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { allContext } = useShare() as ShareContextType;
  const { data, error, isLoading, mutate } = allContext;

  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setDelay(true);
    }, 2000);
    if (!isLoading && !error) {
      setTokenData(data?.verifiedToken as any);
    } else {
      setTokenData(null);
    }
  }, [data?.verifiedToken, error, isLoading]);

  if (!mounted) {
    return null;
  }
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
          <m.ul className="flex items-center  space-x-4 ">
            {largeNavigationData.map((nav, index) => {
              const { path, routeName } = nav;

              return (
                <Link href={path as string} key={index}>
                  <m.li
                    className={`hover:bg-[var(--red-primary-brand-color)] hover:text-white p-2 rounded-md`}
                    variants={childVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {routeName}
                  </m.li>
                </Link>
              );
            })}

            <>
              {!tokenData && (
                <Link href="/auth/login">
                  <div>
                    <m.li
                      className={`bg-[var(--red-primary-brand-color)] text-white p-2 rounded-md `}
                      variants={childVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      লগইন/সাইন-আপ
                    </m.li>
                  </div>
                </Link>
              )}
            </>

            <div>
              {tokenData && (
                <Dropdown
                  tokenData={tokenData}
                  setTokenData={setTokenData}
                  mutate={mutate}
                />
              )}
            </div>
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
          </m.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
