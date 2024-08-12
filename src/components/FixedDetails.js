import React from 'react';
import { motion } from 'framer-motion';
import DarkModeSwitcher from './UiComponents/DarkModeSwitcher';
import FixedButton from './UiComponents/FixedButton';

const FixedDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, marginBottom: 2 }}
      animate={{ opacity: 1, marginBottom: 0 }}
      transition={{
        type: 'spring',
        delay: '2.2',
        stiffness: 50,
      }}
      className=" fixed bottom-0 w-full flex justify-center lg:justify-between items-center flex-wrap"
    >
      <div className=" p-3  right-0 bottom-0 text-white m-4  flex items-center   ">
        <FixedButton to="/bible" title="📖" target={'_blank'} />
        <FixedButton to="/donation" title="Open Present View" target={'_blank'} />

        <DarkModeSwitcher />
      </div>

      <div className=" p-3 bottom-0 text-white m-4 left-0 flex items-center">
        <FixedButton to="/doc" title="Documentation" />
        <FixedButton to="/donation" title="Donation 🎁" />
      </div>
    </motion.div>
  );
};

export default FixedDetails;
