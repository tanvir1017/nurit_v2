import { BiChat } from "react-icons/bi";
import { BsEnvelopePaperHeartFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="container font-HSRegular">
      <div id="heading_text">
        <p className="text-4xl text-center font-HSBold">
          আমাদের সাথে{" "}
          <span className="text-[var(--red-primary-brand-color)]">যোগাযোগ</span>{" "}
          করতে চাইলে
        </p>
      </div>
      <div id="contact_card" className="p-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-48  p-6 rounded-2xl bg-[#F0F8FF] text-black text-center border-t-2 border-t-[#3698EC]">
            <FiPhoneCall className="text-[#3698EC] text-6xl mb-8 mx-auto" />
            <p>যেকোনো প্রকার সাহয্যের জন্য কল করুন।</p>
            <div className="flex justify-center items-center text-[#3698EC] space-x-5 ">
              <p>+880 162 4666000 </p>
              <p>+880 162 4888444</p>
            </div>
          </div>
          <div className=" p-6 rounded-2xl bg-[#F0FFF1] text-black text-center border-t-2 border-t-[#26E07F]">
            <BsEnvelopePaperHeartFill className="text-[#07ba6c] text-6xl mb-8 mx-auto" />
            <p>
              আমাদের সম্পর্কে কোন জানা বা জিজ্ঞাসা করার থাকলে নিম্মের ইমেইল
              গুলোতে পাঠাতে পারেন।
            </p>
            <div className="flex-row   space-x-5 ">
              <p>
                ইনফো:{" "}
                <span className="text-[#07ba6c]"> info@nurITinstitute.com</span>
              </p>
              <p>
                হেল্প:{" "}
                <span className="text-[#07ba6c]">help@nurITinstitute.com</span>
              </p>
            </div>
          </div>
          <div className="h-48 p-6 rounded-2xl bg-[#FFF0F0] text-black text-center border-t-2 border-t-[#FA314A]">
            <BiChat className="text-[#FA314A] text-6xl mb-8 mx-auto" />
            <p>
              আমাদের কাষ্টমার কেয়ার এর সাথে সরাসরি চ্যাট এর মাধ্যমে সাপ্তাহে{" "}
              <strong className="text-[#FA314A]">০৭ দিন, ২৪ ঘন্টা</strong>{" "}
              সাপোর্ট পাবেন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
