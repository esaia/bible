import React from 'react';
import { motion } from 'framer-motion';
import DarkModeSwitcher from './UiComponents/DarkModeSwitcher';
import FixedButton from './UiComponents/FixedButton';

const FixedDetails = () => {
  return (
    <div>
      {/* Right */}
      <motion.div
        initial={{ opacity: 0, marginBottom: 2 }}
        animate={{ opacity: 1, marginBottom: 0 }}
        transition={{
          type: 'spring',
          delay: '2.2',
          stiffness: 50,
        }}
      >
        <div className=" p-3  right-0 bottom-0 text-white m-4 fixed   ">
          <div className="flex">
            <FixedButton to="/bible" title="📖" target={'_blank'} />
            <FixedButton to="/donation" title="Open Present View" target={'_blank'} />

            <DarkModeSwitcher />
          </div>
        </div>

        {/* left */}
        <div className=" p-3 bottom-0 text-white m-4 left-0 fixed">
          <div className="flex">
            <FixedButton to="/doc" title="Documentation" />
            <FixedButton to="/donation" title="Donation 🎁" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FixedDetails;
