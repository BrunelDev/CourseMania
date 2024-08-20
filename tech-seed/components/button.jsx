"use client";
import React from "react";
import PropTypes from "prop-types";

export default function Button({
  title,
  bgColor = "bg-gray-200", // Default background color
  action = () => {},
  textColor = "text-black", // Default text color
  hoverBgColor = "hover:bg-gray-300", // Default hover background color
  hoverTextColor = "hover:text-white", // Default hover text color
}) {
  return (
    <span
      className={`cursor-pointer ${textColor} ${hoverTextColor} ${hoverBgColor} py-2 px-4 text-sm md:text-base lg:text-lg rounded-md ${bgColor} w-full max-w-xs md:max-w-sm lg:max-w-md h-fit z-50 flex items-center justify-center`}
      onClick={action}
    >
      {title}
    </span>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  action: PropTypes.func,
  textColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};
