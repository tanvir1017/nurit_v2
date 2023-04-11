import { motion as m } from "framer-motion";
import Image from "next/image";

const JoinWithUs = () => {
  return (
    <section className="container font-HSRegular my-[10rem]">
      <div className="flex-col md:flex md:flex-row justify-center items-center">
        <div className="">
          <Image
            width={650}
            height={100}
            src="/images/content/joinwitUs.png"
            alt="join with us"
          />
        </div>
        <div className="md:mt-0 mt-4">
          <p className="md:text-5xl text-3xl font-HSBold md:leading-[5rem]">
            আজই জয়েন করুন আমাদের
            <br className="md:block hidden" />
            ওয়েব সাইটের মাধ্যমে
          </p>
          <small className="font-HSMedium block text-xl">
            ফ্রি রেজিস্ট্রেশন করে শেখা শুরু করে দিন
          </small>

          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              boxShadow: "0px 4px 12px 0px hsl(0deg 76.29% 46.18% / 98.6%)",
            }}
            className="bg-[var(--red-primary-brand-color)] px-5 py-3 rounded-lg mt-5 text-white"
          >
            আজই জয়েন করুন
          </m.button>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
