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
        className="flex flex-col gap-4 py-8"
      >
        <div className="text-center lg:text-start break-all  lg:w-2/4">
          From {aboutData.address}. {aboutData.subTitle}. {desc[0]}
        </div>
        <div className="flex items-center justify-start gap-2">
          <img
            src="/instagram.png"
            alt="instagram icon"
            className="rounded-full p-1 border border-black "
          />
          <img
            src="/x.png"
            alt="twitter icon"
            className="rounded-full p-1 border border-black"
          />
          <img
            src="/linkedin.png"
            alt="linkedin icon"
            className="rounded-full p-1 border border-black "
          />
          <img
            src="/facebook.png"
            alt="facebook icon"
            className="rounded-full p-1 border border-black "
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 font-bold">
          <div className="flex flex-col md:flex-row md:gap-0 gap-4 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: "400", damping: "10" }}
              className="border-2 border-black rounded-full px-4 py-2 hover:bg-green-500 hover:text-white"
            >
              DOWNLOAD CV
            </motion.button>
            <div className="hidden md:block w-20 border-t-2 border-black" />
            <div className="block md:hidden border-l-2 border-black h-20" />
          </div>
          <div>MY SKILLS</div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
