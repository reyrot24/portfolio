import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
    opacity: 0,
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
    opacity: 1,
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
    opacity: 0,
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeIn",
};

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex justify-center items-center w-full h-screen gap-1"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        exit="exit"
      >
        <motion.span
          className="w-5 h-5 rounded-full animate-bg"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="w-5 h-5 rounded-full animate-bg"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="w-5 h-5 rounded-full animate-bg"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
