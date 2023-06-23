import LightModeBrand from "@/components/shared/brand";
import Metadata from "@/util/SEO/metadata";

import Modal from "@/components/shared/headlessui/dialog";
import { BlurImage } from "@/lib/blurImage";
import Submit from "@/util/buttons/submit";
import { responseType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import useSWR from "swr";

const VerifyYourEmail = () => {
  const { mutate } = useSWR("/api/auth/login");
  const [loading, setLoading] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<responseType>({
    title: "",
    description: "",
    image: "",
    isShowButton: null,
    buttonText: "",
    buttonLink: "",
  });

  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  function openModal(responseData: responseType) {
    setIsOpen(true);
    setResponse(responseData);
  }

  const handlePreventLoading = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await mutate(async () => {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: verifyEmail }),
      });
      const data = await res.json();
      if (!data.success && res.status === 409) {
        setLoading(false);
        openModal({
          title: "Email Not Sent!",
          description: data.message,
          image: "/images/exist-email.png",
          isShowButton: true,
          buttonText: "Got it, Redirect me to the login page",
          buttonLink: "/auth/login",
        });
      } else if (!res.ok) {
        setLoading(false);
        openModal({
          title: "Something went wrong",
          description: "Try again later !",
          image: "/images/something-went-wrong.png",
          isShowButton: true,
          buttonText: "Got it, Thanks!",
        });
      } else if (res.status === 200) {
        setLoading(false);
        openModal({
          title: "Email sent",
          description: data.message,
          image: "/images/send-mail.webp",
          isShowButton: true,
          buttonText: "Got it, Thanks!",
        });
        setVerifyEmail("");
        // mutate("/api/auth/verify-email");
      }
    });
  };
  return (
    <>
      <Metadata
        title="Verify email address"
        name="Verify email address"
        content="This page will verify your email address"
      />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} response={response} />
      <div className="font-HSRegular md:large_container px-7 py-5">
        <div className="md:px-12">
          <div className="flex justify-between md:items-center">
            <LightModeBrand />
            <div className="md:block hidden">
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
          <div className="md:flex justify-around items-center mt-12">
            <div className="login_image">
              <BlurImage
                bg="bg-slate-300"
                customHeight="23.5.rem"
                width={450}
                height={100}
                imageSrc="/images/verify-email.webp"
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
                    required
                  />

                  <p className="absolute -bottom-[10px] invisible peer-invalid:visible peer-invalid:translate-y-1 duration-300  text-[var(--red-primary-brand-color)] text-sm ">
                    একটি বৈধ ইমেইল ঠিকানা প্রদান কর ।{" "}
                  </p>
                </label>
                <div className="flex justify-between items-center relative">
                  <Submit buttonText="রেজিষ্টার লিংক পাঠান" loading={loading} />
                </div>
                <div className="md:hidden block">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// VerifyYourEmail.theme = "light";

export default VerifyYourEmail;
