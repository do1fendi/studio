import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const setShowNav = () => {
    setIsShow(!isShow);   
  };
  return (
    // <div classNameName="flex justify-between items-center p-4">
    //   <h1 classNameName="text-3xl font-teal-600">STUDIO</h1>
    //   <nav classNameName="flex gap-2">
    //     <Link href="/">
    //       <a>Home</a>
    //     </Link>
    //     <Link href="/project">
    //       <a>Project</a>
    //     </Link>
    //     <Link href="/about">
    //       <a>About</a>
    //     </Link>
    //   </nav>
    // </div>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
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
      <div className={isShow ? "block w-full lg:block lg:flex lg:items-center lg:w-auto" : "hidden w-full lg:block lg:flex lg:items-center lg:w-auto"}>
        <nav className="flex gap-2 text-sm" >
          <Link href="/">
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
