import { PasswordInputLabel } from "@/components/shared/inputLabel/inputLabel";
import Submit from "@/util/buttons/submit";
import { useRef, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import ProfileLayout from "./layout";

const Password = () => {
  const [seePassword, showPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const password__Ref = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };
  const handlePassWordEncrypt = () => {
    if (seePassword) {
      showPassword(!seePassword);
    } else {
      showPassword(true);
    }
  };
  return (
    <ProfileLayout>
      <section>
        <div className="pb-10">
          <h1 className="text-2xl font-HSLight">আপনার পাসওয়ার্ড চেঞ্জ করুন</h1>
        </div>

        <form onSubmit={handleOnSubmit} className="space-y-5">
          <PasswordInputLabel
            field_ref={password__Ref}
            labelTex="পূর্বের পাসওয়ার্ডটি দিন"
            nameText="password"
            onClickFunc={handlePassWordEncrypt}
            placeholderText="পাসওয়ার্ড"
            requiredType={true}
            seePassword={seePassword}
            title="type your password"
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />
          <PasswordInputLabel
            field_ref={password__Ref}
            labelTex="নতুন পাসওয়ার্ডটি দিন"
            nameText="password"
            onClickFunc={handlePassWordEncrypt}
            placeholderText="নতুন পাসওয়ার্ডটি দিন"
            requiredType={true}
            seePassword={seePassword}
            title="re-type your password"
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />
          <PasswordInputLabel
            field_ref={password__Ref}
            labelTex="পুনরায় পাসওয়ার্ডটি দিন"
            nameText="password"
            onClickFunc={handlePassWordEncrypt}
            placeholderText="পুনরায় পাসওয়ার্ডটি দিন"
            requiredType={true}
            seePassword={seePassword}
            title="re-type your password"
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />

          <Submit loading={loading} buttonText="আপডেট করুন" />
        </form>
      </section>
    </ProfileLayout>
  );
};

export default Password;
