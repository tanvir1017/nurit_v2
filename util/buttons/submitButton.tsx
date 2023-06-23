import { motion as m, useReducedMotion } from "framer-motion";
import Image from "next/image";
// submit button wil use for form submit 
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
      disabled={loading}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="submit"
      className=" bg-[var(--red-primary-brand-color)] border-none rounded-md  text-white px-8 py-2 flex justify-between items-center"
    >
      {loading && <Image src="/loader.svg" alt="" width={20} height={40} />}
      {loading ? "waiting..." : buttonText}
    </m.button>
  );
};

export default SubmitButton;
