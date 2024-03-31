import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion";

const Hero = ({ heroData }) => {
  //console.log(heroData);
  const fullName = heroData.name.split(" "); //split full name into first and last name
  const firstName = fullName[0];
  const lastName = fullName[1];

  return (
    <>
      <div className="flex flex-col items-center lg:items-start py-8 gap-4">
        <motion.div
          initial={{opacity:0,scale:0,x:-100}}
          animate={{opacity:1,scale:1,x:0}}
          transition={{duration:0.3}}
          className="flex flex-col items-center justify-center lg:items-start gap-4 pb-8"
        >
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
        </motion.div>
        <HeroBanner heroData={heroData} />
      </div>
    </>
  );
};

export default Hero;
