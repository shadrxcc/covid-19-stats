import React from "react";
import { IoArrowBackOutline, IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Detailsnav = () => {
  return (
    <div className="flex w-full sticky top-0 text-white bg-purple-700 font-semibold justify-between items-center p-3">
      <Link to="/">
        <IoArrowBackOutline className="fs-4" />
      </Link>
      <p className="">Details</p>
      <span className="flex justify-between">
        <IoSettingsSharp className="fs-4" />
      </span>
    </div>
  );
};

export default Detailsnav;
