import { Menu, Transition } from "@headlessui/react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, Fragment } from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

interface TokenDataType {
  tokenData: {
    id: string;
    first__name: string;
    last__name: string;
    email__id: string;
    password: string;
    photo__URL: string;
    phone__numb: number;
    gender: string;
    role: string;
  };
  setTokenData: Dispatch<any>;
  mutate: (value: null) => {};
}

export function Dropdown(props: TokenDataType) {
  const { tokenData, setTokenData, mutate } = props;
  const Logout = async () => {
    await fetch("/api/auth/logout", { method: "DELETE" })
      .then((res) => res.json())
      .then((_) => {
        setTokenData(null);
        mutate(null);
      });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <m.div animate className="transition-all duration-300">
        <Menu.Button
          className={`cursor-pointer bg-gradient-to-r from-indigo-500 to-red-500  p-0.5 rounded-full  m-auto overflow-hidden relative  md:w-14 md:h-14 w-12 h-12`}
        >
          <Image
            className={`absolute -top-2 rounded-full p-0.5`}
            src={tokenData ? tokenData?.photo__URL : "/images/blur_user.png"}
            alt={tokenData ? tokenData?.first__name : "logged-out avatar"}
            fill
            objectFit="cover"
          />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-100 dark:bg-[#050a15] border border-opacity-40  border-[#050a15]  z-50">
          <>
            {" "}
            <div className="text-center my-2">
              <div
                className={`cursor-pointer bg-gradient-to-r from-indigo-500 to-red-500  rounded-full relative  w-24 h-24 m-auto p-0.5`}
              >
                <div className="bg-white p-0.5 rounded-full h-full w-full">
                  <Image
                    className={`absolute -top-2 p-1  rounded-full`}
                    src={
                      tokenData
                        ? tokenData?.photo__URL
                        : "/images/blur_user.png"
                    }
                    alt={
                      tokenData ? tokenData?.first__name : "logged-out avatar"
                    }
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-lg font-medium mt-2">Tanvir</p>
              <Link
                href="/not-finished-yet"
                className="px-4 py-2 bg-[var(--red-primary-brand-color)] shadow-red-500/30 shadow-xl text-white inline-block text-sm rounded-full mt-2 mb-4"
              >
                View Profile
              </Link>
            </div>
          </>
          <div className="py-1 ">
            <Menu.Item>
              {() => (
                <Link
                  href="/not-finished-yet"
                  className="py-3 px-4  w-full flex items-center space-x-2 hover:scale-105 transition duration-75"
                >
                  <CiSettings className="text-[20px]" />
                  <span className="text-sm">Settings</span>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 cursor-pointer" onClick={() => Logout()}>
            <Menu.Item>
              {() => (
                <span className=" py-3 px-4 w-full flex items-center space-x-2 hover:scale-105 transition duration-75">
                  <IoIosLogOut className="text-[20px]" />
                  <span className="text-sm">Logout</span>
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
