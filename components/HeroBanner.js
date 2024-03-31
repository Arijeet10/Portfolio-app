"use client";

import { motion } from "framer-motion";

const HeroBanner = ({ heroData }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative lg:absolute lg:-top-20 lg:right-5 px-16 z-50"
      >
        <img
          src={heroData.alternateAvatars[0].url}
          alt="profile image"
          className=" rounded-full"
        />
        <div className="absolute bottom-[75px] -left-[15px] sm:bottom-[150px] sm:-left-[5px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
          <span className="flex items-start text-5xl">
            <span className="">{heroData.exp_year}</span>
            <span className="text-green-500">+</span>
          </span>
          <span className="text-sm">
            YEARS OF
            <br />
            <span className="text-green-500">EXPERIENCE</span>
          </span>
        </div>
        <div className="absolute bottom-[50px] right-[10px] sm:bottom-[100px] sm:right-[20px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
          <span className="flex text-5xl">{heroData.some_total}</span>
          <span className="text-sm">
            COMPLETED
            <br />
            <span className="text-green-500">PROJECTS</span>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default HeroBanner;
