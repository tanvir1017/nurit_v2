import LightModeBrand from "@/components/shared/brand";
import {
  PasswordInputLabel,
  TextInputLabel,
} from "@/components/shared/inputLabel/inputLabel";
import SubmitButton from "@/util/buttons/submitButton";
import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePassword } from "react-icons/md";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [routerPath, setRouterPath] = useState("");
  const [seePassword, shoPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("ইমেইল আইডি অথবা ইউজার নেম");
  const shouldReduceMotion = useReducedMotion();

  const email__Ref = useRef<HTMLInputElement>(null);
  const password__Ref = useRef<HTMLInputElement>(null);

  const router = useRouter();
  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    const prevPath = storage.getItem("prevPath");
    setRouterPath(prevPath as string);
  }, [router.pathname]);

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const handlePassWordEncrypt = () => {
    if (seePassword) {
      shoPassword(!seePassword);
    } else {
      shoPassword(true);
    }
  };

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
      const res = await window.fetch("/api/auth", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          email: `${email}`,
          password: `${password}`,
        },
      });
      const data = await res.json();
      if (!data.success) {
        setLoading(false);
        (async () => {
          toast.error("Wrong credential", {
            icon: (
              <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
            ),
            position: toast.POSITION.TOP_CENTER,
          });
        })();
        setResponse("Wrong credential");
      } else {
        setLoading(false);
        (async () => {
          toast.success("Login successful", {
            icon: <TbAlertTriangleFilled className="text-green-400" />,
            position: toast.POSITION.TOP_CENTER,
          });
        })();
        setResponse(response);
        (async () => {
          router.replace(routerPath);
        })();
      }
    }
  };

  return (
    <>
      <ToastContainer transition={Bounce} hideProgressBar />
      <div className="font-HSRegular large_container">
        <div className="px-12">
          <div className="flex justify-between items-center">
            <LightModeBrand />
            <div>
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

          <div className="flex justify-around items-center mt-12">
            <div className="login_image">
              <Image
                width={450}
                height={100}
                src="/images/_Login.png"
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
                  labelTex={response}
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
                  labelTex={!response ? "পাসওয়ার্ড" : response}
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
                  <SubmitButton loading={loading} buttonText="লগইন" />

                  <Link
                    href="404"
                    className="text-sm text-[var(--red-primary-brand-color)] underline decoration-1 italic "
                  >
                    পাসওয়ার্ড ভুলে গিয়েছি
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
