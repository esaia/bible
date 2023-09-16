import React from "react";
import { Switch } from "@material-tailwind/react";
import useBibleContext from "../hooks/useBibleContext";
import { motion } from "framer-motion";

const FixedDetails = () => {
  const { inputValues, inputDispatch } = useBibleContext();

  return (
    <div>
      {/* Right */}

      <motion.div
        initial={{ opacity: 0, marginBottom: 2 }}
        animate={{ opacity: 1, marginBottom: 0 }}
        transition={{
          type: "spring",
          delay: "2.2",
          stiffness: 50,
        }}
      >
        <div className=" p-3  right-0 bottom-0 text-white m-4 fixed   ">
          <div className="flex">
            <a href="/show" target="_blank">
              <button className=" px-4 py-2 mx-5 dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
                Open Present View
              </button>
            </a>
            <Switch
              color="indigo"
              label={inputValues.darkmode ? "light" : "dark"}
              onChange={() => inputDispatch({ type: "CHANGE_DARK_MODE" })}
              checked={inputValues.darkmode}
              ripple={true}
            />
          </div>
        </div>

        {/* left */}
        <div className=" p-3   bottom-0 text-white m-4 left-0 fixed     ">
          <div className="flex">
            <a href="/doc" target="_blank">
              <button className=" px-4 py-2 mx-5 dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
                Documentation
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FixedDetails;
