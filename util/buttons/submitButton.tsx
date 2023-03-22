import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";

const SubmitButton = ({
  buttonText,
  loading,
}: {
  buttonText: string;
  loading?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <m.button
      variants={childVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="submit"
      className=" bg-[var(--red-primary-brand-color)] border-none rounded-md  text-white px-8 p-2 "
    >
      {loading ? (
        <span>
          {" "}
          <Image
            className="inline-flex"
            src="/icons/loading.svg"
            width={25}
            height={100}
            alt="loading"
          />{" "}
        </span>
      ) : (
        <span className="ml-4">{buttonText}</span>
      )}{" "}
    </m.button>
  );
};

export default SubmitButton;
