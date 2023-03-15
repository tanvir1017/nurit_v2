import { largeNavigationData } from "@/util/localDb/navLink";
import { motion as m, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LightModeBrand from "../brand";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { resolvedTheme, setTheme } = useTheme();

  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

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
    <nav className="border-[#68696c00]/50 z-40 sticky top-0 border-b bg-slate-50/60 dark:text-white backdrop-blur-2xl transition-colors duration-500 dark:bg-[#68696c00]  font-HSRegular ">
      <div className="container">
        <div className="relative h-20  flex items-center justify-between">
          <LightModeBrand />
          <m.ul className="flex  space-x-4 ">
            {largeNavigationData.map((nav, index) => {
              const { path, routeName } = nav;
              return (
                <m.li
                  key={index}
                  className={`${
                    index === 4
                      ? "bg-[var(--red-primary-brand-color)]"
                      : "hover:bg-[var(--red-primary-brand-color)]"
                  } p-2 rounded-md`}
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={path as string}>{routeName}</Link>
                </m.li>
              );
            })}
            {mounted && (
              <m.li
                className="cursor-pointer border rounded-full w-14 bg-gray-800 relative overflow-hidden mr-4 my-2"
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