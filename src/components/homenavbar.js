import React from 'react';
import { IoSettingsSharp } from "react-icons/io5";

const Homenavbar = () => {
  return (
    <div className="flex sticky top-0 w-full bg-purple-700 text-white font-semibold justify-between items-center p-3">
      <p>2022</p>
      <p className="">World Cases</p>
      <span className="flex justify-between">
        <IoSettingsSharp className="fs-4" />
      </span>
    </div>
  );
}

export default Homenavbar