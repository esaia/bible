import React from "react";
import { motion } from "framer-motion";

const FramerMotionWrapper = ({ children }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, marginBottom: 2 }}
        animate={{ opacity: 1, marginBottom: 0 }}
        transition={{
          type: "spring",
          delay: "0.8",
          stiffness: 50,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FramerMotionWrapper;
