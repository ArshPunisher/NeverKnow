import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <div className="inline-block font-extrabold text-[1.5rem]">
          <div
            className="text-black leading-none mb-[-0.2rem]"
          >
            Never
          </div>
          <div
            className="text-gray-600 leading-none"
            style={{
              color: "rgba(255, 140, 0, 1)", // Vibrant orange for a mix effect
            }}
          >
            Know
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
