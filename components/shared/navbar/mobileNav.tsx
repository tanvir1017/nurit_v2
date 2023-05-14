import useShare from "@/lib/context/useShare";
import { fetcher } from "@/lib/fetcher";
import { largeNavigationData } from "@/util/localDb/navLink";
import { ShareContextType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import useSWR from "swr";
import LightModeBrand from "../brand";
import { Dropdown } from "../headlessui/headLessUi";

const MobileNav = () => {
  const [navToggle, showNavToggle] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [delay, setDelay] = useState<boolean>(false);
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
  const handleToggleNav = () => {
    if (!navToggle) {
      showNavToggle(true);
    } else {
      showNavToggle(!true);
    }
  };
  const handleThemeControl = () => {
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(true);
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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

  return (
    <>
      <nav className="border-[#68696c00]/50 z-50 w-full sticky top-0 border-b bg-slate-50/60 dark:text-white backdrop-blur-2xl transition-colors duration-500 dark:bg-[#090d18a1]  font-HSRegular px-5 block lg:hidden">
        <div className={`container `}>
          <div className="relative h-20  flex items-center justify-between">
            <LightModeBrand />
            <div className="TOGGLE_ICON flex items-center">
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
              {mounted && (
                <m.li
                  className="cursor-pointer  ring-1 ring-[var(--red-primary-brand-color)] rounded-full bg-gray-800 relative mx-4 md:w-14 md:h-6  w-12 h-4"
                  onClick={handleThemeControl}
                >
                  <Image
                    className={`absolute md:bottom-[4px] bottom-[0px] ${
                      toggle ? "ml-1 duration-300" : "ml-7 duration-300"
                    }`}
                    width={15}
                    height={15}
                    src={
                      resolvedTheme === "dark"
                        ? "/icons/sun.svg"
                        : "/icons/moon.svg"
                    }
                    alt={
                      resolvedTheme === "dark"
                        ? "Moon svg icon"
                        : "Sun svg icon"
                    }
                  />
                </m.li>
              )}
              <div className="transition will-change-transform transform duration-200">
                {!navToggle ? (
                  <AiOutlineMenuUnfold
                    onClick={handleToggleNav}
                    className={` md:text-3xl text-xl`}
                  />
                ) : (
                  <RxCross1
                    onClick={handleToggleNav}
                    className={` md:text-3xl text-xl`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex justify-center z-50 w-full font-HSRegular">
        <div
          className={`COLLAPSE_ABLE_BAR  top-22 border-b backdrop-blur-xl bg-[#3737374d] text-black dark:text-white dark:bg-[#090d18d9]  transform  h-screen overflow-hidden w-full fixed transition duration-300 ease-in-out ${
            navToggle
              ? "translate-x-0 h-screen opacity-100"
              : "-translate-x-[99rem] opacity-0"
          } `}
        >
          <div className="container p-5">
            <m.ul className="flex flex-col items-start ">
              {largeNavigationData.map((nav, index) => {
                const { path, routeName } = nav;
                return (
                  <Link
                    onClick={handleToggleNav}
                    href={path as string}
                    key={index}
                    className="p-3 dark:hover:bg-[#212a4057] hover:bg-[#fff]  backdrop:blur-md rounded-lg w-full dark:text-white text-[#0a1020] font-HSMedium text-[18px]"
                  >
                    <m.li variants={childVariants}>{routeName}</m.li>
                  </Link>
                );
              })}
              {/* {tokenData && delay && tokenData?.role !== "STUDENT" && (
                <Link
                  href="/dashboard/home"
                  className="p-3 dark:hover:bg-[#212a4057] hover:bg-[#fff]  backdrop:blur-md rounded-lg w-full dark:text-white text-[#0a1020] font-HSMedium text-[18px]"
                >
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <m.li variants={childVariants}>ড্যাশবোর্ড</m.li>
                  </m.div>
                </Link>
              )} */}

              {tokenData && delay && tokenData?.role !== "ADMIN" && (
                <Link href="/my-class">
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <m.li
                      className={`hover:bg-[var(--red-primary-brand-color)] hover:text-white p-2 rounded-md`}
                      variants={childVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      মাই ক্লাস
                    </m.li>
                  </m.div>
                </Link>
              )}
              {!tokenData && delay && (
                <Link href="/auth/login">
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <m.li
                      className={`bg-[var(--red-primary-brand-color)] text-white p-2 rounded-md `}
                      variants={childVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      লগইন/সাইন-আপ
                    </m.li>
                  </m.div>
                </Link>
              )}
            </m.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
