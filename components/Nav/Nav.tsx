import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const setShowNav = () => {
    setIsShow(!isShow);
  };
  return (
    <nav className="sticky top-0 flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={`${process.env.BASEURL}/images/logo/logo.webp`} width="40" height="40" />
        <span className="font-semibold text-xl tracking-tight">STUDIO</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setShowNav()}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          isShow
            ? "block w-full lg:block lg:flex lg:items-center lg:w-auto"
            : "hidden w-full lg:block lg:flex lg:items-center lg:w-auto"
        }
      >
        <nav className="flex gap-2 text-sm">
          <Link href="/studio">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/project">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Project
            </a>
          </Link>
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              About
            </a>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
