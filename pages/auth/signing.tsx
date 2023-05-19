import LightModeBrand from "@/components/shared/brand";
import {
  PasswordInputLabel,
  RadioButton,
  TextInputLabel,
} from "@/components/shared/inputLabel/inputLabel";
import ImageUpload from "@/components/shared/upload/imageUpload";
import useShare from "@/lib/context/useShare";
import { generateRandomId } from "@/lib/generateRandomNumber";
import Metadata from "@/util/SEO/metadata";
import Submit from "@/util/buttons/submit";
import { ShareContextType } from "@/util/types/types";
import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import {
  BsEnvelopeCheckFill,
  BsFillInfoCircleFill,
  BsTelephoneInbound,
} from "react-icons/bs";
import { CgRename } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
// import { ShareContextType } from "./login";

const SignIn = () => {
  const [seePassword, shoPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pictureURL, setPictureURL] = useState<string>("/images/user.png");
  const [gender, setGender] = useState<string>("");
  const { allContext } = useShare() as ShareContextType;
  const { mutate } = allContext;

  const first__nameRef = useRef<HTMLInputElement>(null);
  const last__nameRef = useRef<HTMLInputElement>(null);
  const password__Ref = useRef<HTMLInputElement>(null);
  const c_Password__Ref = useRef<HTMLInputElement>(null);
  const phone__Ref = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const {
    query: { token },
  } = router;

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

  const handlePreventLoading = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const first__name = first__nameRef?.current?.value;
    const last__name = last__nameRef?.current?.value;
    const password = password__Ref?.current?.value;
    const c_password = c_Password__Ref?.current?.value;
    const phone__number = phone__Ref?.current?.value;
    const user__name = generateRandomId(`${first__name}${last__name}`);
    if (password !== c_password) {
      setLoading(false);
      toast.error("password didn't match to each other");
    } else if (
      !first__name ||
      !password ||
      !phone__number ||
      gender.length <= 3
    ) {
      setLoading(false);
      toast.error(
        "Required field can't be empty, please full fill all required information"
      );
    } else {
      try {
        const result = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first__name: first__name,
            last__name: last__name,
            user__name: user__name,
            email__id: token,
            password: password,
            photo__URL: pictureURL,
            gender: gender,
            phone__numb: Number(phone__number),
          }),
        });
        const res = await result.json();
        if (!res.success) {
          setLoading(false);
          toast.error(res.message);
        } else {
          setLoading(false);
          toast.success(res.message);
          mutate();
          router.push("/");
        }
      } catch (error) {
        if (error) {
          setLoading(false);
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <>
      <Metadata
        title="NurIT | Signing"
        name="Login page"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <div className="font-HSRegular md:large_container  px-7 py-5">
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <div className="md:px-12">
          <div className="flex justify-between items-center">
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
            <div className="login_image md:block hidden">
              <Image
                width={550}
                height={100}
                src="/images/login.png"
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
                  field_ref={first__nameRef}
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
                  field_ref={last__nameRef}
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
                  disabled
                  value={token as string}
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
                  field_ref={password__Ref}
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
                  field_ref={c_Password__Ref}
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
                  field_ref={phone__Ref}
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
                    handleSetGender={() => setGender("male")}
                    id="gender-radio"
                    labelTex="Male"
                    name="gender-radio"
                    type="radio"
                    value="Male"
                  />
                  <RadioButton
                    handleSetGender={() => setGender("female")}
                    id="gender-radio"
                    labelTex="Female"
                    name="gender-radio"
                    type="radio"
                    value="Female"
                  />
                  <RadioButton
                    handleSetGender={() => setGender("others")}
                    id="gender-radio"
                    labelTex="Others"
                    name="gender-radio"
                    type="radio"
                    value="Others"
                  />
                </div>
                <div className="flex justify-between items-center relative">
                  <Submit loading={loading} buttonText="সাইন-ইন" />
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

              <div className="one_click_login_or_signing mt-11 flex justify-start items-center space-x-2">
                <div className="flex items-center justify-between">
                  <p className="mr-5 underline italic">
                    <Link href="/auth/login">ম্যানুয়ালি লগইন/সাইন-ইন</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
