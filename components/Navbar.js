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
    <div className="sticky top-0 p-2">
      <div className=" flex items-center justify-between">
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
        <div className="flex flex-col justify-start z-50 fixed top-0 right-0 h-screen w-2/4 sm:w-[500px] px-2 py-4 bg-white ">
          <div className=" h-20 flex items-start justify-end">
            <button onClick={closeNavbar} className="">
              <img src="/close.png" alt="close icon" className="w-10 h-10" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="border-2 border-black rounded-full p-4" />
              <div className="border-l-2 border-black h-full" />
              <div className="border-2 border-black rounded-full p-4" />
            </div>
            <div onClick={closeNavbar} className="text-base sm:text-2xl font-bold flex flex-col items-center justify-start gap-6">
              <Link href="/" className="hover:text-green-500">
                HOME
              </Link>
              <Link href="/#about" className="hover:text-green-500" >
                ABOUT
              </Link>
              <Link href="/#services" className="hover:text-green-500">
                SERVICES
              </Link>
              <Link href="/#skills" className="hover:text-green-500">
                SKILLS
              </Link>
              <Link href="/#projects" className="hover:text-green-500">
                PROJECTS
              </Link>
              <Link href="/#timeline" className="hover:text-green-500">
                TIMELINE
              </Link>
              <Link href="/#testimonials" className="hover:text-green-500">
                TESTIMONIALS
              </Link>
              <Link href="/#contact" className="hover:text-green-500">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
