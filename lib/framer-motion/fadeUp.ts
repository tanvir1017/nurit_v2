const easing = [0.6, -0.05, 0.01, 0.99];
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
