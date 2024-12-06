import React from "react";
import { Link } from "react-router-dom";

const CustomBtn = ({ text, className, children, href , onClick}) => {
  return (
    <Link to={href} onClick={onClick}>
      <button
        className={` font-openSans text-sm md:text-2xl text-white rounded-lg flex gap-x-2.5 bg-gradient-to-tr from-Gr-start to-Gr-end py-1.5 px-2  md:py-3.5 md:px-4 hover:scale-110 duration-300 ${className} `}
      >
        {children} {text}
      </button>
    </Link>
  );
};

export default CustomBtn;
