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
    <>
      <header className="bg-[#0a0a0a] font-HSRegular text-white">
        <nav className="grid grid-cols-2 gap-4  mx-16 py-6 place-items-center">
          <m.ul className="flex justify-start col-start-1  space-x-3 ">
            <LightModeBrand />
            {largeNavigationData.map((nav, index) => {
              const { path, routeName } = nav;
              return (
                <m.li
                  key={index}
                  className="hover:bg-[var(--red-primary-brand-color)] p-2 rounded-md "
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={path as string}>{routeName}</Link>
                </m.li>
              );
            })}
          </m.ul>
          <m.ul className="flex justify-center  space-x-2 col-start-2 col-span-1 ">
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
            <m.li
              className="hover:bg-[var(--red-primary-brand-color)] p-2 rounded-md "
              variants={childVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="login">লগইন/সাইন-আপ</Link>
            </m.li>
          </m.ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
