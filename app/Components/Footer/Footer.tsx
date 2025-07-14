import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-4 flex justify-center">
      <p className="footer-text text-sm flex items-center gap-1">
        Made By
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <a
          href="https://linktr.ee/mohdtalib7232"
          target="_blank"
          className=" text-green-300 font-bold"
        >
          Mohd Talib
        </a>
      </p>
    </div>
  );
};

export default Footer;
