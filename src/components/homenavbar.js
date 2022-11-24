import React from 'react';
import { IoMicSharp, IoSettingsSharp } from "react-icons/io5";

const Homenavbar = () => {
  return (
    <div className="flex fixed w-full font-semibold justify-between items-center p-3">
      <p>2022</p>
      <p className="">World Cases</p>
      <span className="flex justify-between">
        <IoMicSharp />
        <IoSettingsSharp />
      </span>
    </div>
  );
}

export default Homenavbar