import Link from "next/link";
import {
  BsArrowBarRight,
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsTwitter,
} from "react-icons/bs";
import LightModeBrand from "../brand";
const Footer = () => {
  return (
    <footer className="bg-[var(--black-primary-brand-color)]  font-HSRegular text-white">
      <div className="container md:px-16 px-5 py-28 ">
        <div className="grid md:grid-cols-5 gap-5 space-x-4">
          <div className="col-span-2 pr-5 space-y-4">
            <LightModeBrand />
            <p className="pt-8">
              নুর আইটি বাংলাদেশের অন্যতম সেরা ই-লার্নিং স্কিল ডেভেলপমেন্ট
              প্ল্যাটফর্ম। দক্ষতা উন্নয়নের মাধ্যমে দেশ থেকে বেকারত্ব দূরীকরণ
              এবং বৈশ্বিক মানবসম্পদ তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>

            <div>
              <p>A Concern of Nur IT Institute</p>
              <small>
                Copyright © 2022 Nur IT Institute. All rights reserved
              </small>

              <div className="flex items-center md:pt-20 pt-5">
                <p className="flex items-center justify-between mr-5">
                  In touch <BsArrowBarRight className="ml-1" />{" "}
                </p>
                <div id="social_icon" className="flex items-center space-x-4">
                  <BsFacebook className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                  <BsTwitter className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                  <BsLinkedin className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                  <BsInstagram className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                  <BsDiscord className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                  <BsReddit className="text-xl hover:text-gray-200 cursor-pointer hover:scale-110 focus:scale-90 transition-all duration-200  text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <p className="font-HSMedium text-xl">কোর্স ক্যাটেগরি</p>
            <ul className="md:ml-5 ml-2 space-y-3 mt-3 text-sm">
              {[
                "3D ভিজুয়ালাইজেশন ",
                "গ্রাফিক্স ডিজাইন",
                " ডিজিটাল মার্কেটিং",
                "ওয়েব প্রোগ্রামিং",
                "রোবটিক্স অটোমেশন ",
                "মাইক্রোসফট অফিস",
                "ভাষা শিক্ষা",
                "লজিস্টিকস এবং সাপ্লাই চেইন",
              ].map((el, i) => (
                <li key={i}>
                  <Link
                    className="hover:translate-x-1 duration-300 transition-all cursor-pointer inline-block border-b hover:border-b-[var(--red-primary-brand-color)]"
                    href="."
                  >
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="md:mt-0 mt-5">
            <p className="font-HSMedium text-xl">প্রয়োজনীয় লিঙ্ক</p>
            <ul className="md:ml-5 ml-2 space-y-3 mt-3 text-sm">
              {[
                "সার্টিফিকেট খুঁজুন",
                "ব্লগ",
                "স্টুডেন্ট ফিডব্যাক",
                "ওয়েব প্রোগ্রামিং",
                "সার্টিফিকেশন",
                "আমাদের সাথে যোগাযোগ",
              ].map((el, i) => (
                <li key={i}>
                  <Link
                    className="hover:translate-x-1 duration-300 border-b hover:border-b-[var(--red-primary-brand-color)]  cursor-pointer inline-block "
                    href="."
                  >
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="md:mt-0 mt-5">
            <p className="font-HSMedium text-xl">লিগ্যাল</p>
            <ul className="md:ml-5 ml-2 space-y-3 mt-3 text-sm ">
              {[
                "ব্যবহার বিধি",
                "FAQ",
                "প্রাইভেসি পলিসি",
                "আমাদের সম্পর্কে",
              ].map((el, i) => (
                <li key={i} className="relative">
                  <Link
                    className="hover:translate-x-1 border-b hover:border-b-[var(--red-primary-brand-color)]  duration-300 cursor-pointer inline-block"
                    href="."
                  >
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
