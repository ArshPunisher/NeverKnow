import React from "react";

const Logo = () => {
  return (
    <div className="text-center">
      <a href="/">
        <div className="flex justify-center font-extrabold text-[1.5rem]">
          <span
            className="text-[1.2rem] lg:text-[1.4rem] text-black leading-none"
          >
            Never
          </span>
          <span
            className="text-[1.2rem] lg:text-[1.4rem] text-gray-600 leading-none"
            style={{
              color: "rgba(255, 140, 0, 1)", // Vibrant orange for a mix effesct
            }}
          >
            Know
          </span>
        </div>
      </a>
    </div>
  );
};

export default Logo;
