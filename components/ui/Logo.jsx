import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-dancing cursor-pointer hover:text-primary transition-all ">
       ByCase
      </span>
    </Link>
  );
};

export default Logo;
