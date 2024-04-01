"use client";

import { motion } from "framer-motion";

const About = ({ aboutData }) => {
  const desc = aboutData.description.split(" I pride myself"); //remove extra description texts

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: [100] }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 pb-8"
      >
        <div className="font-bold text-5xl text-center">
          <div>
            ABOUT <span className="text-green-500">ME</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <div className="relative lg:hidden flex justify-center">
            <img
              src={aboutData.alternateAvatars[0].url}
              alt="profile image"
              className="  rounded-full w-3/4 h-2/4 "
            />
            <div className="absolute bottom-[75px] -left-[10px] sm:bottom-[100px] sm:left-[30px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
              <span className="flex items-start text-5xl">
                <span className="">{aboutData.exp_year}</span>
                <span className="text-green-500">+</span>
              </span>
              <span className="text-sm">
                YEARS OF
                <br />
                <span className="text-green-500">EXPERIENCE</span>
              </span>
            </div>
            <div className="absolute bottom-[30px] right-[15px] sm:bottom-[50px] sm:right-[80px] lg:right-[20px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
              <span className="flex text-5xl">{aboutData.some_total}</span>
              <span className="text-sm">
                COMPLETED
                <br />
                <span className="text-green-500">PROJECTS</span>
              </span>
            </div>
          </div>
          <div className="text-center text-2xl break-normal  lg:w-2/4">
            From {aboutData.address}. {aboutData.subTitle}. {desc[0]}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
