import { FiEye, FiEyeOff } from "react-icons/fi";

type TextInputLabelPropsType = {
  labelTex: string | number;
  requiredType: boolean;
  iconComponent: React.ReactNode;
  placeholderText: string;
  type: string;
  title: string;
  nameText: string;
};

type PasswordInputLabelPropsType = {
  labelTex: string | number;
  requiredType: boolean;
  iconComponent: React.ReactNode;
  placeholderText: string;
  title: string;
  nameText: string;
  seePassword: boolean;
  onClickFunc: () => void;
};
export const TextInputLabel = ({
  labelTex,
  requiredType,
  iconComponent,
  placeholderText,
  type,
  title,
  nameText,
}: TextInputLabelPropsType) => {
  return (
    <label
      className={`relative block space-y-2 ${type === "email" && " pb-3"}`}
    >
      <span
        className={`${
          requiredType && " after:content-['*'] after:ml-0.5 after:text-red-500"
        }  block text-sm font-HSLight`}
      >
        {labelTex}
      </span>

      <span className="absolute inset-y-0 top-5 left-0 flex items-center pl-2">
        {iconComponent}
      </span>
      <input
        className={` placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none ${
          type !== "email" &&
          "focus:border-[var(--red-primary-brand-color)]  focus:ring-[var(--red-primary-brand-color)]"
        } focus:ring-1 sm:text-sm ${
          type === "email" &&
          " peer focus:border-green-500 focus:ring-green-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        }`}
        placeholder={placeholderText}
        type={type}
        title={title}
        name={nameText}
      />
      {type === "email" && (
        <p className="invisible peer-invalid:visible absolute text-pink-600 text-sm">
          দয়া করে একটি বৈধ ইমেইল ঠিকানা প্রদান করুন ।
        </p>
      )}
    </label>
  );
};

export const PasswordInputLabel = ({
  labelTex,
  requiredType,
  iconComponent,
  placeholderText,
  title,
  nameText,
  seePassword,
  onClickFunc,
}: PasswordInputLabelPropsType) => {
  return (
    <label className="relative block space-y-2">
      <span
        className={`${
          requiredType &&
          "after:content-['*'] after:ml-0.5 after:text-[var(--red-primary-brand-color)]"
        }  block text-sm font-HSLight `}
      >
        {labelTex}
      </span>

      <span className="absolute inset-y-0 top-5 left-0 flex items-center pl-2">
        {iconComponent}
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[var(--red-primary-brand-color)]  focus:ring-[var(--red-primary-brand-color)] focus:ring-1 sm:text-sm"
        placeholder={placeholderText}
        type={seePassword ? "text" : "password"}
        name={nameText}
        title={title}
      />
      <button
        type="button"
        title="hide & show password"
        className="absolute inset-y-0 top-5 right-2 flex items-center pl-2 cursor-pointer"
        onClick={onClickFunc}
      >
        {seePassword ? (
          <FiEyeOff className="text-gray-500" />
        ) : (
          <FiEye className="text-gray-500" />
        )}
      </button>
    </label>
  );
};
