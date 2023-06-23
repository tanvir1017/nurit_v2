import { StateFullPasswordInputLabel } from "@/components/shared/inputLabel/stateFullInput";
import useShare from "@/lib/context/useShare";
import { ShareContextType } from "@/util/types/types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import useSWR from "swr";
import ProfileLayout from "./layout";

const Password = () => {
  const { mutate } = useSWR("/api/auth/update-password");
  const [seePassword, showPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { allContext } = useShare() as ShareContextType;
  const { data } = allContext;

  const resetPasswords = () => {
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleOnUserInfoUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log(newPassword, confirmPassword, password);
    if (newPassword !== confirmPassword) {
      setLoading(false);
      toast.error(
        "Password mismatch between new password between confirm password",
        {
          duration: 5000,
        }
      );
    } else {
      try {
        await mutate(async () => {
          const res = await fetch("/api/auth/update-password", {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              id: data.verifiedToken.id,
              password: password,
              password_new: confirmPassword,
            }),
          });
          const response = await res.json();
          if (!response.success) {
            setLoading(false);
            toast.error(response.message, {
              duration: 5000,
            });
          } else {
            setLoading(false);
            resetPasswords();
            toast.success(response.message, {
              duration: 5000,
            });
          }
        });
      } catch (err) {
        setLoading(false);
        toast.error("something went wrong", {
          duration: 5000,
        });
      }
    }
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
          <h1 className="text-2xl font-HSLight">তোমার পাসওয়ার্ড চেঞ্জ কর</h1>
        </div>

        <form onSubmit={handleOnUserInfoUpdate} className="space-y-5">
          <StateFullPasswordInputLabel
            inputValue={password}
            labelTex="পূর্বের পাসওয়ার্ডটি দাও"
            nameText="password"
            onClickFunc={handlePassWordEncrypt}
            placeholderText="পাসওয়ার্ড"
            requiredType
            seePassword={seePassword}
            title="type your password"
            handleOnChange={(e) => setPassword(e.target.value)}
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />
          <StateFullPasswordInputLabel
            inputValue={newPassword}
            labelTex="নতুন পাসওয়ার্ডটি দাও"
            nameText="password"
            seePassword={seePassword}
            onClickFunc={handlePassWordEncrypt}
            placeholderText="নতুন পাসওয়ার্ডটি দাও"
            requiredType
            title="re-type your password"
            handleOnChange={(e) => setNewPassword(e.target.value)}
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />
          <StateFullPasswordInputLabel
            handleOnChange={(e) => setConfirmPassword(e.target.value)}
            inputValue={confirmPassword}
            seePassword={seePassword}
            labelTex="পুনরায় পাসওয়ার্ডটি দাও"
            nameText="password"
            onClickFunc={handlePassWordEncrypt}
            placeholderText="পুনরায় পাসওয়ার্ডটি দাও"
            requiredType
            title="re-type your password"
            iconComponent={
              <MdOutlinePassword
                className={`dark:text-gray-400 text-slate-400`}
              />
            }
          />

          <button
            type="submit"
            className="mt-10 py-1 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center relative"
          >
            {loading && (
              <span className="absolute left-3">
                <AiOutlineLoading3Quarters className="text-[18px] animate-spin" />
              </span>
            )}
            <span className="ml-3">{loading ? "আপডেটিং..." : "আপডেট কর"}</span>
          </button>
        </form>
      </section>
    </ProfileLayout>
  );
};

export default Password;
