import React from "react";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="w-full max-w-[1200px] animate-pulse mt-16 mx-auto"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
