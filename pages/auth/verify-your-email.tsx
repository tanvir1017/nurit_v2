import LightModeBrand from "@/components/shared/brand";
import { TextInputLabel } from "@/components/shared/inputLabel/inputLabel";
import SubmitButton from "@/util/buttons/submitButton";

import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const VerifyYourEmail = () => {
  const [seePassword, shoPassword] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handlePreventLoading = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
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
                <TextInputLabel
                  labelTex="ইমেইল আইডি অথবা ইউজার নেম"
                  nameText="email"
                  placeholderText="ইমেইল আইডি অথবা ইউজার নেম"
                  requiredType
                  title="login email"
                  type="email"
                  iconComponent={
                    <BiUserCircle
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />

                <div className="flex justify-between items-center relative">
                  <Link href="/auth/signing">
                    <SubmitButton buttonText="রেজিষ্টার লিংক পাঠান" />
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

export default VerifyYourEmail;
