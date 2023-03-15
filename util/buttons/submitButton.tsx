import { motion as m, useReducedMotion } from "framer-motion";

const SubmitButton = ({ buttonText }: { buttonText: string }) => {
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
      className="bg-[var(--red-primary-brand-color)] border-none rounded-md  text-white px-12 p-2"
    >
      {buttonText}
    </m.button>
  );
};

export default SubmitButton;
