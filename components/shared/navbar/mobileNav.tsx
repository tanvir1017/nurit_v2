import useShare from "@/lib/context/useShare";
import { ShareContextType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import LightModeBrand from "../brand";

const MobileNav = () => {
  const [navToggle, showNavToggle] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [delay, setDelay] = useState<boolean>(false);
  const [tokenData, setTokenData] = useState<any | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const { allContext } = useShare() as ShareContextType;
  const { data, error, isLoading, mutate } = allContext;

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
      <nav className="border-[#68696c00]/50 z-50 w-full sticky top-0 border-b bg-slate-50/60 dark:text-white backdrop-blur-2xl transition-colors duration-500 dark:bg-[#68696c00]  font-HSRegular px-5 block lg:hidden">
        <div
          className={`"container ${
            navToggle ? "border-b  border-[#767676]" : "border-0"
          }`}
        >
          <div className="relative h-20  flex items-center justify-between">
            <LightModeBrand />
            <div
              className="TOGGLE_ICON flex items-center"
              onClick={handleToggleNav}
            >
              {mounted && (
                <m.li
                  className="cursor-pointer border rounded-full w-14 h-6  bg-gray-800 relative mr-4"
                  onClick={handleThemeControl}
                >
                  <Image
                    className={`absolute bottom-[2px] ${
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
                      resolvedTheme === "dark"
                        ? "Moon svg icon"
                        : "Sun svg icon"
                    }
                  />
                </m.li>
              )}
              <div className="transition will-change-transform transform duration-200">
                {!navToggle ? (
                  <m.span
                    animate={{
                      transition: { y: 5 },
                    }}
                    whileInView={{
                      y: 5,
                    }}
                  >
                    <AiOutlineMenuUnfold className={` text-3xl`} />
                  </m.span>
                ) : (
                  <m.span
                    whileInView={{
                      y: 5,
                    }}
                  >
                    <RxCross1 className={` text-3xl`} />
                  </m.span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex justify-center z-50 w-full">
        <div
          className={`COLLAPSE_ABLE_BAR  top-22 border-b bg-slate-50/60 dark:text-white backdrop-blur-2xl dark:bg-[#68696c00]  transform  h-screen bg-red-500 overflow-hidden w-full fixed transition duration-300 ease-in-out ${
            navToggle
              ? "translate-x-0 h-screen opacity-100"
              : "-translate-x-[99rem] opacity-0"
          } `}
        >
          <div className="container p-5">
            <ul className="">
              <li>Nav 1</li>
              <li>Nav 1</li>
              <li>Nav 1</li>
              <li>Nav 1</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
