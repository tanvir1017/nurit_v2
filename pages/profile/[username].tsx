import ErrorMessage from "@/components/error";
import { StateFullTextInputLabel } from "@/components/shared/inputLabel/stateFullInput";
import ImageUpload from "@/components/shared/upload/imageUpload";
import { fetcher } from "@/lib/fetcher";
import { bodyDataType } from "@/util/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsInfoCircle, BsTelephoneOutbound } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import { FiMail } from "react-icons/fi";
import { MdAlternateEmail, MdCancel } from "react-icons/md";
import useSWR from "swr";
import ProfileSkeleton from "./components/profileskeleton";
import ProfileLayout from "./layout";

const UserName = () => {
  const [pictureURL, setPictureURL] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { query } = useRouter();
  const { username } = query;
  const { data, error, isLoading } = useSWR(
    `/api/auth/user-at?username=${username}`,
    fetcher
  );
  let content = null;
  if (!data && !error && isLoading) {
    content = <ProfileSkeleton />;
  }
  if (!isLoading && !data && error) {
    content = <ErrorMessage />;
  }
  if (!isLoading && !error && data) {
    const {
      first__name,
      last__name,
      username,
      email__id,
      photo__URL,
      phone__numb,
      gender,
    } = data.returnData as bodyDataType;

    const handleOnSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    };
    content = (
      <section>
        <div className="flex items-start justify-between mb-5">
          <h1 className="text-2xl font-HSLight">প্রোফাইল আপডেট</h1>
          <Link href={`/profile`}>
            <button className="py-1 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center">
              <MdCancel className="text-[18px] mr-2 -ml-1" /> cancel
            </button>
          </Link>
        </div>
        <div>
          <div id="PROFILE" className="flex items-start ">
            <ImageUpload
              setPictureURL={setPictureURL}
              pictureURL={pictureURL}
              photo__URL={photo__URL}
            />
          </div>
          <form onSubmit={handleOnSubmit}>
            <div
              id="TOTAL-INFO"
              className="grid md:grid-cols-2 gap-3 mt-14 place-items-center "
            >
              <div className="w-full space-y-5">
                <StateFullTextInputLabel
                  inputValue={first__name}
                  handleOnChange={() => {}}
                  labelTex="First name"
                  nameText="First name"
                  disabled={false}
                  placeholderText=""
                  iconComponent={<FaRegUserCircle />}
                  title="First name"
                  type="text"
                  value=""
                />
                <div className="relative">
                  <p className="absolute flex items-center italic text-[12px] right-2 text-[var(--red-primary-brand-color)]">
                    <BsInfoCircle className="text-[14px]" />
                    <span className="ml-2">
                      ইমেইল আইডি চেঞ্জ করার উপযোগী নাহ
                    </span>
                  </p>
                  <StateFullTextInputLabel
                    inputValue={email__id}
                    handleOnChange={() => {}}
                    labelTex="Email id"
                    nameText="Email id"
                    disabled
                    placeholderText=""
                    iconComponent={<FiMail />}
                    title="Email id"
                    type="text"
                    value=""
                  />
                </div>
                <StateFullTextInputLabel
                  inputValue={`0${phone__numb}`}
                  handleOnChange={() => {}}
                  labelTex="Provided phone number"
                  nameText="Phone number"
                  placeholderText=""
                  disabled={false}
                  iconComponent={<BsTelephoneOutbound />}
                  title="Email id"
                  type="text"
                  value=""
                />
              </div>
              <div className="w-full space-y-5">
                <StateFullTextInputLabel
                  inputValue={last__name}
                  handleOnChange={() => {}}
                  labelTex="Last name"
                  nameText="Last name"
                  disabled={false}
                  placeholderText=""
                  iconComponent={<FaRegUserCircle />}
                  title="Last name"
                  type="text"
                  value=""
                />
                <div className="relative">
                  <p className="absolute flex items-center italic text-[12px] right-2 text-[var(--red-primary-brand-color)]">
                    <BsInfoCircle className="text-[14px]" />
                    <span className="ml-2">
                      ইউজার আইডি চেঞ্জ করার উপযোগী নাহ
                    </span>
                  </p>
                  <StateFullTextInputLabel
                    inputValue={username}
                    handleOnChange={() => {}}
                    labelTex="User name"
                    nameText="User name"
                    disabled
                    placeholderText=""
                    iconComponent={<MdAlternateEmail />}
                    title="User name"
                    type="text"
                    value=""
                  />
                </div>
                <div className="relative">
                  <p className="text-sm mb-2">Gender select</p>
                  <select className="select select-bordered placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none">
                    {["male", "female", "others"].map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 mb-5 py-1 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center relative"
              onClick={() => setLoading((prev) => !prev)}
            >
              {loading && (
                <span className="absolute left-3">
                  <AiOutlineLoading3Quarters className="text-[18px] animate-spin" />
                </span>
              )}
              <span className="ml-3">{loading ? "Updating" : "Update"}</span>
            </button>
          </form>
        </div>
      </section>
    );
  }

  return <ProfileLayout>{content}</ProfileLayout>;
};

export default UserName;
