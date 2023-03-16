import { Blur } from "@/components/shared/blur";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const HeadingSection = () => {
  const [buttonText, setButtonText] = useState("");
  return (
    <section className="-mt-16 font-HSRegular border-general relative  w-full overflow-hidden overflow-x-clip border-b bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[var(--black-primary-brand-color)] dark:bg-none lg:h-screen ">
      <Blur />
      <div className="z-30 w-full py-10  lg:flex lg:h-full lg:items-center lg:py-0">
        <div className="container grid grid-cols-2 place-items-center h-screen">
          <div className="right__side title">
            <h1 className="text-6xl font-HSBold">
              আপনার পছন্দের{" "}
              <span className="text-[var(--red-primary-brand-color)]">
                কোর্স
              </span>{" "}
              পেতে সার্চ করুন
            </h1>

            <div className="grid grid-flow-col gap-5 mt-5">
              <label className={`relative block space-y-2 `}>
                <span
                  className={`absolute inset-y-0 left-0 top-2  flex items-center pl-2`}
                >
                  <BsSearch />
                </span>
                <input
                  className={` placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm `}
                  placeholder="তোমার কাঙ্খিত কোর্সটি খোজ"
                  type="text"
                  title="search  your wanted course"
                  name="course"
                  onChange={(e) => setButtonText(e.target.value)}
                />
              </label>
              <button className="w-28 h-12 mt-2 border-transparent rounded-lg bg-[var(--red-primary-brand-color)] outline-transparent ">
                {buttonText.length > 0 ? (
                  <Link href="courses">সার্চ করুন</Link>
                ) : (
                  <Link href="courses">বিশ্লেষণ করুন</Link>
                )}
              </button>
            </div>
          </div>
          <div className="left__side z-50">
            <Image
              width={500}
              height={100}
              priority
              src="/images/content/userTable.png"
              alt="user setting on table "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
