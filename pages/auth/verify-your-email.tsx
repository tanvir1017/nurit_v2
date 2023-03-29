import LightModeBrand from "@/components/shared/brand";
import Metadata from "@/util/SEO/metadata";
import SubmitButton from "@/util/buttons/submitButton";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";

const VerifyYourEmail = () => {
  const [verifyEmail, setVerifyEmail] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handlePreventLoading = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: verifyEmail }),
    });
    if (!res.ok) {
      (async () => {
        toast.error("Something went wrong!", {
          icon: (
            <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
          ),
          position: toast.POSITION.TOP_CENTER,
        });

        setVerifyEmail("");
      })();
    }
    if (res.status === 200) {
      (async () => {
        toast.success("We've send a mail to your mail", {
          icon: <TbAlertTriangleFilled className="text-green-400" />,
          position: toast.POSITION.TOP_CENTER,
        });
        setVerifyEmail("");
      })();
    }
  };
  return (
    <>
      <Metadata
        title="Verify email address"
        name="Verify email address"
        content="This page will verify your email address"
        key="skill course, course, ms office, office 364"
      />
      <ToastContainer transition={Bounce} hideProgressBar />
      <div className="font-HSRegular large_container">
        <div className="px-12">
          <div className="flex justify-between items-center">
            <LightModeBrand />
            <div>
              <span className="font-HSSemiBold">
                ইতিমধ্যে একটি এ্যকাউন্ট আছে ?
              </span>{" "}
              <Link href="/auth/login">
                <m.button
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="ml-5 bg-transparent border-[var(--red-primary-brand-color)] border  rounded-3xl text-[var(--red-primary-brand-color)] px-4 py-1"
                >
                  লগইন
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
                <h1 className="text-4xl font-HSBold">ইমেইল আইটি ভেরিফাই করো</h1>
                <span className="flex space-x-2 items-center font-HSLight dark:text-gray-300 text-gray-600">
                  <BsFillInfoCircleFill />{" "}
                  <p>তোমার ভ্যালিড ইমেইল আইডিটি প্রোভাইড কর</p>
                </span>
              </div>
              <form onSubmit={handlePreventLoading} className="space-y-4">
                <label
                  className={`relative block space-y-2 ${true && " pb-3"} `}
                >
                  <span
                    className={` ${
                      true &&
                      " after:content-['*'] after:ml-0.5 after:text-red-500"
                    }  block text-sm font-HSLight`}
                  >
                    ইমেইল আইডি
                  </span>

                  <span
                    className={`absolute inset-y-0 top-2 left-0 flex items-center pl-2`}
                  >
                    <BiUserCircle
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  </span>
                  <input
                    value={verifyEmail}
                    onChange={(e) => setVerifyEmail(e.target.value)}
                    className={` placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none 
                       peer focus:border-green-500 focus:ring-green-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    `}
                    placeholder="ইমেইল আইডি"
                    type="email"
                    title="verifying your email"
                    name="email"
                  />

                  <p className="absolute -bottom-[10px] invisible peer-invalid:visible peer-invalid:translate-y-1 duration-300  text-[var(--red-primary-brand-color)] text-sm ">
                    দয়া করে একটি বৈধ ইমেইল ঠিকানা প্রদান কর ।
                  </p>
                </label>
                <div className="flex justify-between items-center relative">
                  <SubmitButton buttonText="রেজিষ্টার লিংক পাঠান" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyYourEmail;
