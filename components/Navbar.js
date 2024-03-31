"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  const openNavbar = (e) => {
    e.preventDefault();
    setNavigation(true);
  };

  const closeNavbar = (e) => {
    e.preventDefault();
    setNavigation(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-5xl font-extrabold flex items-center">
          SARKAR <span className="text-green-500 text-base">○</span>
        </div>
        <div onClick={openNavbar} className="">
          <img
            src="/menu-burger.png"
            alt="options icon"
            className="w-10 h-10"
          />
        </div>
      </div>
      {navigation && (
        <div className="flex flex-col gap-20 z-50 absolute top-0 right-0 h-full w-2/4 sm:w-[500px] px-4 py-8 bg-white ">
        <div className=" h-36 flex items-start justify-end">
        <button onClick={closeNavbar} className="">
          <img src="/close.png" alt="close icon" className="w-10 h-10" />
        </button>
        </div>
        <div className="text-2xl font-bold flex flex-col items-center justify-center gap-4">
        <Link href="/" className="hover:text-green-500">HOME</Link>
        <Link href="#about" className="hover:text-green-500">ABOUT</Link>
        <Link href="#services" className="hover:text-green-500">SERVICES</Link>
        <Link href="#skills" className="hover:text-green-500">SKILLS</Link>
        <Link href="#projects" className="hover:text-green-500">PROJECTS</Link>
        <Link href="#timeline" className="hover:text-green-500">TIMELINE</Link>
        <Link href="#testimonials" className="hover:text-green-500">TESTIMONIALS</Link>
        <Link href="#contact" className="hover:text-green-500">CONTACT</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;
