import LightModeBrand from "@/components/shared/brand";
import Modal from "@/components/shared/headlessui/dialog";
import {
  PasswordInputLabel,
  TextInputLabel,
} from "@/components/shared/inputLabel/inputLabel";
import useShare from "@/lib/context/useShare";
import Metadata from "@/util/SEO/metadata";
import ProcessingButton from "@/util/buttons/proccessingButtong";
import { responseType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePassword } from "react-icons/md";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
export interface ShareContextType {
  allContext: {
    data: {
      verifiedToken: string;
    };
    error: string;
    isLoading: boolean;
    mutate: () => {};
    routerPath: string;
  };
}

const Login = () => {
  const [seePassword, shoPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [response, setResponse] = useState<responseType>({
    title: "",
    description: "",
    image: "",
    isShowButton: null,
    buttonText: "",
    buttonLink: "",
  });
  const { mutate } = useSWR("/api/auth/login");

  const { allContext } = useShare() as unknown as ShareContextType;
  const { mutate: revalidate, routerPath } = allContext;

  const email__Ref = useRef<HTMLInputElement>(null);
  const password__Ref = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // COMMENT => Animation for framer-motion using useReducerMotion() hooks
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // COMMENT => Toggle to show or hide password by clicking see password icon
  const handlePassWordEncrypt = () => {
    if (seePassword) {
      shoPassword(!seePassword);
    } else {
      shoPassword(true);
    }
  };

  // COMMENT => Modal open by the call of openModal() func
  function openModal(responseData: responseType) {
    setIsOpen(true);
    setResponse(responseData);
  }

  // COMMENT => Api request to logged a user and form prevent handling
  const handlePreventLoading = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const email = email__Ref.current?.value;
    const password = password__Ref.current?.value;

    if (!email || !password) {
      toast.error("Required filed can't be empty", {
        icon: (
          <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
        ),
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    } else {
      await mutate(async () => {
        setLoading(true);
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!data.success) {
          setLoading(false);
          openModal({
            title: "Wrong credential",
            description: data.message,
            image: "/images/wrong.png",
            isShowButton: true,
            buttonText: "Got it,",
          });
        } else {
          setLoading(false);

          toast.success(data.message, {
            icon: <TbAlertTriangleFilled className="text-green-400 text-3xl" />,
            position: toast.POSITION.TOP_CENTER,
          });
          revalidate();
          router.replace(routerPath);
        }
        return data;
      });
    }
  };

  return (
    <>
      <Metadata
        title="NurIT | Login"
        name="Login page"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <ToastContainer transition={Bounce} hideProgressBar />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} response={response} />
      <div className="font-HSRegular md:large_container px-7 py-5">
        <div className="md:px-12">
          <div className="flex justify-between md:items-center">
            <LightModeBrand />
            <div className="md:block hidden">
              <span className="font-HSSemiBold">আমার কোন অ্যাকাউন্ট নাই !</span>{" "}
              <Link href="/auth/verify-your-email">
                <m.button
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="ml-5 bg-transparent border-[var(--red-primary-brand-color)] border  rounded-3xl text-[var(--red-primary-brand-color)] px-4 py-1"
                >
                  এ্যকাউন্ট খুলন
                </m.button>
              </Link>
            </div>
          </div>

          <div className="md:flex justify-around items-center mt-12">
            <div className="login_image">
              <Image
                width={450}
                height={100}
                src="/images/login.png"
                alt="Login preview image"
              />
            </div>
            <div className="login_input">
              <div className="login_text_info mb-8">
                <h1 className="text-4xl font-HSBold">লগইন করো </h1>
                <span className="flex space-x-2 items-center font-HSLight dark:text-gray-300 text-gray-600">
                  <BsFillInfoCircleFill />{" "}
                  <p>
                    লগইন করতে তোমার পূর্ববর্তী জিমেইল অ্যাকাউন্ট ব্যবহার কর।
                  </p>
                </span>
              </div>
              <form onSubmit={handlePreventLoading} className="space-y-4">
                <TextInputLabel
                  field_ref={email__Ref}
                  labelTex="ইমেইল আইডি অথবা ইউজার নেম"
                  nameText="email"
                  placeholderText="ইমেইল আইডি অথবা ইউজার নেম"
                  requiredType={true}
                  title="login email"
                  type="email"
                  iconComponent={
                    <BiUserCircle
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />

                <PasswordInputLabel
                  field_ref={password__Ref}
                  labelTex="পাসওয়ার্ড"
                  nameText="password"
                  onClickFunc={handlePassWordEncrypt}
                  placeholderText="পাসওয়ার্ড"
                  requiredType={true}
                  seePassword={seePassword}
                  title="type your password"
                  iconComponent={
                    <MdOutlinePassword
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />

                <div className="flex justify-between items-center relative">
                  <ProcessingButton loading={loading} buttonText="লগইন" />

                  <Link
                    href="404"
                    className="text-sm text-[var(--red-primary-brand-color)] underline decoration-1 italic "
                  >
                    পাসওয়ার্ড ভুলে গিয়েছি
                  </Link>
                </div>

                <div className="md:hidden block">
                  <span className="font-HSSemiBold">
                    আমার কোন অ্যাকাউন্ট নাই !
                  </span>{" "}
                  <Link href="/auth/verify-your-email">
                    <m.button
                      variants={childVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      className="ml-5 bg-transparent border-[var(--red-primary-brand-color)] border  rounded-3xl text-[var(--red-primary-brand-color)] px-4 py-1"
                    >
                      এ্যকাউন্ট খুলন
                    </m.button>
                  </Link>
                </div>
              </form>

              <div className="one_click_login_or_signing mt-11 flex justify-start items-center space-x-2">
                <p className="mr-5">এক ক্লিকে লগইন/সাইন-ইন</p>
                <div className="space-x-3 ">
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    title="google login"
                    className="border-green-600 dark:bg-slate-200  border p-2 rounded-full"
                  >
                    <FcGoogle className="text-2xl" />
                  </m.button>
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    title="google login"
                    className="border-sky-500  border p-2 rounded-full dark:bg-slate-200 "
                  >
                    <FaFacebook className="text-2xl text-sky-500" />
                  </m.button>
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    title="google login"
                    className="border-sky-500  border p-2 rounded-full dark:bg-slate-200 "
                  >
                    <FaTwitter className="text-2xl text-sky-500" />
                  </m.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
