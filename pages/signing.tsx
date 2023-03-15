import LightModeBrand from "@/components/shared/brand";
import {
  PasswordInputLabel,
  RadioButton,
  TextInputLabel,
} from "@/components/shared/inputLabel/inputLabel";
import ImageUpload from "@/components/shared/upload/imageUpload";
import SubmitButton from "@/util/buttons/submitButton";
import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BsEnvelopeCheckFill,
  BsFillInfoCircleFill,
  BsTelephoneInbound,
} from "react-icons/bs";
import { CgRename } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";

const SignIn = () => {
  const [seePassword, shoPassword] = useState(false);
  const [pictureURL, setPictureURL] = useState("/images/user.png");

  const shouldReduceMotion = useReducedMotion();
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
              <m.button
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="ml-5 bg-transparent border-[var(--red-primary-brand-color)] border  rounded-3xl text-[var(--red-primary-brand-color)] px-4 py-1"
              >
                <Link href="/login"> লগইন </Link>
              </m.button>
            </div>
          </div>

          <div className="flex justify-around items-center mt-12">
            <div className="login_image">
              <Image
                width={650}
                height={100}
                src="/images/registation.png"
                alt="Login preview image"
              />
            </div>
            <div className="login_input">
              <div className="login_text_info mb-8">
                <h1 className="text-4xl font-HSBold">নতুন অ্যাকাউন্ট খুলুন</h1>
                <span className="flex space-x-2 items-center font-HSLight dark:text-gray-300 text-gray-600">
                  <BsFillInfoCircleFill />{" "}
                  <p>সাইন-ইন করতে তোমার ভ্যালিড জিমেইল অ্যাকাউন্ট ব্যবহার কর</p>
                </span>
              </div>
              <ImageUpload
                pictureURL={pictureURL}
                setPictureURL={setPictureURL}
              />
              <form onSubmit={handlePreventLoading} className="space-y-4">
                <TextInputLabel
                  labelTex="ফার্স্ট নেম"
                  nameText="first__name"
                  placeholderText="নামের প্রথমাংশ দিন"
                  requiredType
                  title="First Name"
                  type="text"
                  iconComponent={
                    <CgRename className={`dark:text-gray-400 text-slate-400`} />
                  }
                />
                <TextInputLabel
                  labelTex="লাষ্ট নেম"
                  nameText="last__name"
                  placeholderText="নামের শেষাংশ দিন"
                  requiredType={false}
                  title="Last Name"
                  type="text"
                  iconComponent={
                    <CgRename className={`dark:text-gray-400 text-slate-400`} />
                  }
                />
                <TextInputLabel
                  labelTex="ইমেইল আইডি"
                  nameText="email"
                  placeholderText="অ্যাক্টিভ ইমেইল আইডি দিন"
                  requiredType
                  title="login email"
                  type="email"
                  iconComponent={
                    <BsEnvelopeCheckFill
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />

                <PasswordInputLabel
                  labelTex="পাসওয়ার্ড"
                  nameText="password"
                  onClickFunc={handlePassWordEncrypt}
                  placeholderText="পাসওয়ার্ড"
                  requiredType
                  seePassword={seePassword}
                  title="type your password"
                  iconComponent={
                    <MdOutlinePassword
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />
                <PasswordInputLabel
                  labelTex="রি-টাইপ পাসওয়ার্ড"
                  nameText="password"
                  onClickFunc={handlePassWordEncrypt}
                  placeholderText="রি-টাইপ পাসওয়ার্ড"
                  requiredType
                  seePassword={seePassword}
                  title="re-type your password"
                  iconComponent={
                    <MdOutlinePassword
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />
                <TextInputLabel
                  labelTex="ফোন নাম্বার দিন"
                  nameText="email"
                  placeholderText="ব্যবহারিত সচল ফোন নাম্বারটি দিন"
                  requiredType
                  title="Phone Number"
                  type="text"
                  iconComponent={
                    <BsTelephoneInbound
                      className={`dark:text-gray-400 text-slate-400`}
                    />
                  }
                />
                <div className="flex flex-wrap">
                  <RadioButton
                    id="gender-radio"
                    labelTex="Male"
                    name="gender-radio"
                    type="radio"
                    value="Male"
                  />
                  <RadioButton
                    id="gender-radio"
                    labelTex="Female"
                    name="gender-radio"
                    type="radio"
                    value="Female"
                  />
                  <RadioButton
                    id="gender-radio"
                    labelTex="Others"
                    name="gender-radio"
                    type="radio"
                    value="Others"
                  />
                </div>
                <div className="flex justify-between items-center relative">
                  <SubmitButton buttonText="সাইন-ইন" />
                </div>
              </form>

              <div className="one_click_login_or_signing mt-11 flex justify-start items-center space-x-2">
                <p className="mr-5 underline italic">
                  <Link href="/login">এক ক্লিকে লগইন/সাইন-ইন</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
