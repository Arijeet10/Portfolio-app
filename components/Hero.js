import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion";

const Hero = ({ heroData }) => {
  //console.log(heroData);
  const fullName = heroData.name.split(" "); //split full name into first and last name
  const firstName = fullName[0];
  const lastName = fullName[1];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: [-100] }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" flex flex-col lg:flex-row lg:justify-evenly items-center py-8 gap-4"
      >
        <div className="flex flex-col items-center justify-center md:items-start gap-4">
          <div className="text-l font-bold uppercase">
            HELLO, <span className="text-green-500">MY NAME IS</span>
          </div>
          <div className="uppercase font-black flex items-center gap-4">
            <span className="firstname md:text-8xl text-5xl ">{firstName}</span>
            <span className="lastname md:text-8xl text-5xl">{lastName}</span>
          </div>
          <div className="font-semibold">
            I am <span className="text-xl font-semibold">{heroData.title}</span>
          </div>
        </div>
        <HeroBanner heroData={heroData} />
      </motion.div>
    </>
  );
};

export default Hero;
