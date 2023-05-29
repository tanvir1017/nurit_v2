import { profileEditSidebarNav } from "@/util/localDb/navLink";
import { Menu, Transition } from "@headlessui/react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface PropsType {}

export default function ProfileMenuBar(props: PropsType) {
  const { pathname } = useRouter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <m.div animate className="transition-all duration-300">
        <Menu.Button
          className={`cursor-pointer md:hidden  mb-5 bg-gradient-to-r from-purple-500 to-pink-600 w-8 h-8 rounded-full inline-flex justify-center items-center absolute -top-7 -left-3 `}
        >
          <RxHamburgerMenu />
        </Menu.Button>
      </m.div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute  mt-2 w-80 shadow-lg bg-slate-100 dark:bg-[#050a15] border-2 dark:border-pink-400 rounded-lg border-slate-200 p-2 z-20">
          <ul className="">
            {profileEditSidebarNav.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  {() => (
                    <Link href={item.link}>
                      <li
                        className={`flex items-center dark:bg-[#0d214a]/30 backdrop-blur-md bg-white dark:shadow-none shadow-md p-2 rounded-lg  border-transparent border-2  hover:border-purple-500  mt-2 ${
                          pathname === item.link &&
                          "bg-gradient-to-r from-pink-500 to-purple-500 text-white "
                        }`}
                      >
                        <span className="mr-3 block">{item.icon}</span>
                        <span
                          className={`${
                            item.link !== pathname &&
                            "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-HSSemiBold"
                          }`}
                        >
                          {item.item}
                        </span>
                      </li>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
