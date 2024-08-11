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
      className={`cursor-pointer ${textColor} ${hoverTextColor} ${hoverBgColor} py-2 px-3 text-center rounded-md ${bgColor} w-fit h-fit z-50`}
      onClick={action}
    >
      {title}
    </span>
  );
}

// Adding PropTypes for better validation
Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  action: PropTypes.func,
  textColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};
