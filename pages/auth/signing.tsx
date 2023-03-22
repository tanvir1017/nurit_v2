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
import { useRef, useState } from "react";
import {
  BsEnvelopeCheckFill,
  BsFillInfoCircleFill,
  BsTelephoneInbound,
} from "react-icons/bs";
import { CgRename } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [seePassword, shoPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pictureURL, setPictureURL] = useState<string>("/images/user.png");
  const [gender, setGender] = useState<string>("");

  const first__nameRef = useRef<HTMLInputElement>(null);
  const last__nameRef = useRef<HTMLInputElement>(null);
  const email__Ref = useRef<HTMLInputElement>(null);
  const password__Ref = useRef<HTMLInputElement>(null);
  const c_Password__Ref = useRef<HTMLInputElement>(null);
  const phone__Ref = useRef<HTMLInputElement>(null);

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
    const email = email__Ref?.current?.value;
    const password = password__Ref?.current?.value;
    const c_password = c_Password__Ref?.current?.value;
    const phone__number = phone__Ref?.current?.value;
    if (password !== c_password) {
      (async () => {
        toast.success("Picture upload successful ⚒", {
          theme: "colored",

          position: toast.POSITION.TOP_CENTER,
        });
      })();
    }
    if (
      !first__name ||
      !email ||
      !password ||
      !phone__number ||
      gender.length <= 3
    ) {
      setLoading(false);
      return (async () => {
        toast.error(
          "Required field can't be empty, please full fill all required information",
          {
            // theme: "colored",
            position: toast.POSITION.TOP_CENTER,
          }
        );
      })();
    } else {
      try {
        const postData = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first__name: first__name,
            last__name: last__name,
            email__id: email,
            password: password,
            photo__URL: pictureURL,
            gender: gender,
            phone__numb: Number(phone__number),
          }),
        }).then((res) => {
          if (res.status === 406) {
            setLoading(false);
            (async () => {
              toast.error(
                "Email id already registered or something went wrong",
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
            })();
          } else if (res.status === 201) {
            setLoading(false);
            (async () => {
              toast.success("Registration successful", {
                position: toast.POSITION.TOP_CENTER,
              });
            })();
          } else {
            setLoading(false);
            (async () => {
              toast.error("Something went wrong 👎", {
                position: toast.POSITION.TOP_CENTER,
              });
            })();
          }
        });
      } catch (error) {
        if (error) {
          setLoading(false);
          toast.error("Something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    }
  };

  return (
    <>
      <ToastContainer transition={Bounce} />
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
                width={550}
                height={100}
                src="/images/_Login.png"
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
                  field_ref={email__Ref}
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
                  <SubmitButton loading={loading} buttonText="সাইন-ইন" />
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
