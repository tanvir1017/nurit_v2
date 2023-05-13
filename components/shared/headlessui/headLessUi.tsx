import ErrorMessage from "@/components/error";
import { fetcher } from "@/lib/fetcher";
import { Menu, Transition } from "@headlessui/react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, Fragment } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import useSWR from "swr";

interface TokenDataType {
  tokenData: {
    email__id: string;
    role: string;
  };
  setTokenData: Dispatch<any>;
  mutate: (value: null) => {};
}

interface returnDataType {
  returnData: {
    email__id: string;
    first__name: string;
    last__name: string;
    photo__URL: string;
    role: string;
  };
}

export function Dropdown(props: TokenDataType) {
  const { tokenData, setTokenData, mutate } = props;
  const { data, isLoading, error } = useSWR(
    `api/auth/user-at?email=${tokenData?.email__id}`,
    fetcher
  );
  // COMMENT : => Conditionally destructure the value that getting from api return data
  let content = null;
  if (!error && !data && isLoading) {
    content = (
      <Menu as="div" className="relative inline-block text-left">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <p>Loading...</p>
        </Transition>
      </Menu>
    );
  }
  if (error && !data && !isLoading) {
    content = (
      <Menu as="div" className="relative inline-block text-left">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <ErrorMessage />
        </Transition>
      </Menu>
    );
  }
  if (!error && !isLoading && data) {
    console.log(data);
    const { returnData }: returnDataType = data;
    const { email__id, last__name, first__name, photo__URL, role } = returnData;
    content = (
      <Menu as="div" className="relative inline-block text-left">
        <m.div animate className="transition-all duration-300 ">
          <Menu.Button
            className={`cursor-pointer bg-gradient-to-r from-indigo-500 to-red-500  p-0.5 rounded-full  m-auto overflow-hidden relative  md:w-14 md:h-14 w-12 h-12`}
          >
            <Image
              className={`absolute -top-2 rounded-full p-0.5`}
              src={!isLoading ? photo__URL : "/images/blur_user.png"}
              alt={`${first__name} ${last__name} avatar`}
              title={`${first__name} ${last__name} avatar`}
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-80 rounded-3xl shadow-lg bg-slate-100 dark:bg-[#050a15] border-2  dark:border-[#121b2e] border-slate-200  px-2  z-50">
            <div className="bg-slate-200 dark:bg-[#121b2e] rounded-3xl pb-2">
              <div className="my-2 px-2 pb-3 pt-4">
                <div className="flex items-start">
                  <div
                    className={` bg-gradient-to-r from-indigo-500 to-red-500 rounded-full  p-0.5 `}
                  >
                    <div className="bg-white dark:bg-[#050a15] p-0.5 rounded-full relative w-16 h-16">
                      <Image
                        className={`absolute -top-2 p-1  rounded-full`}
                        src={!isLoading ? photo__URL : "/images/blur_user.png"}
                        alt={`${first__name} ${last__name} avatar`}
                        title={`${first__name} ${last__name} avatar`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-HSRegular">
                      {first__name} {last__name}
                    </p>
                    <p className="dark:text-gray-300 text-gray-500 text-[14px]">
                      {email__id}
                    </p>
                    <Link
                      href="/not-finished-yet"
                      className="px-4 py-2  bg-[var(--red-primary-brand-color)] hover:shadow-red-600/30 hover:shadow-md w-full text-center text-white inline-block text-sm rounded-full mt-6 mb-4"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
              {role === "ADMIN" && (
                <>
                  <div className="py-1 hover:bg-slate-100 dark:hover:bg-[#050a15]">
                    <Menu.Item>
                      {() => (
                        <Link
                          href="/dashboard/posts"
                          className="py-3 px-4  w-full flex items-center space-x-2"
                        >
                          <BsPencilSquare className="text-[18px]" />
                          <span className="text-sm">Write a blog</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1 hover:bg-slate-100 dark:hover:bg-[#050a15]">
                    <Menu.Item>
                      {() => (
                        <Link
                          href="/dashboard/home"
                          className="py-3 px-4  w-full flex items-center space-x-2"
                        >
                          <MdDashboardCustomize className="text-[18px]" />
                          <span className="text-sm">Dashboard</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </>
              )}
              {role === "MEMBER" && (
                <>
                  <div className="py-1 hover:bg-slate-100 dark:hover:bg-[#050a15]">
                    <Menu.Item>
                      {() => (
                        <Link
                          href="/dashboard/posts"
                          className="py-3 px-4  w-full flex items-center space-x-2"
                        >
                          <BsPencilSquare className="text-[18px]" />
                          <span className="text-sm">Write a blog</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </>
              )}
              {role === "STUDENT" && (
                <>
                  <div className="py-1 hover:bg-slate-100 dark:hover:bg-[#050a15]">
                    <Menu.Item>
                      {() => (
                        <Link
                          href="/my-class"
                          className="py-3 px-4  w-full flex items-center space-x-2"
                        >
                          <MdDashboardCustomize className="text-[18px]" />
                          <span className="text-sm">My Class</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </>
              )}
              <div className="py-1 hover:bg-slate-100 dark:hover:bg-[#050a15] rounded-b-lg">
                <Menu.Item>
                  {() => (
                    <Link
                      href="/not-finished-yet"
                      className="py-3 px-4  w-full flex items-center space-x-2 "
                    >
                      <CiSettings className="text-[20px]" />
                      <span className="text-sm">Settings</span>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </div>
            <div className="py-3 cursor-pointer" onClick={() => Logout()}>
              <Menu.Item>
                {() => (
                  <span className=" py-3 px-4 w-full flex items-center space-x-2 hover:scale-105 transition duration-75">
                    <IoIosLogOut className="text-[20px]" />
                    <span className="text-sm">Sign out</span>
                  </span>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
  const Logout = async () => {
    await fetch("/api/auth/logout", { method: "DELETE" })
      .then((res) => res.json())
      .then((_) => {
        setTokenData(null);
        mutate(null);
      });
  };
  return content;
}
