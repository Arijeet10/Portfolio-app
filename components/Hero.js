import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion";

const Hero = ({ heroData }) => {
  //console.log(heroData);
  const fullName = heroData.name.split(" "); //split full name into first and last name
  const firstName = fullName[0];
  const lastName = fullName[1];

  return (
    <>
      <div className="flex items-center lg:items-start justify-center lg:justify-between  pt-8 gap-4">
        <motion.div
          initial={{opacity:0,scale:0,x:-100}}
          animate={{opacity:1,scale:1,x:0}}
          transition={{duration:0.3}}
          className="flex flex-col items-center justify-center lg:items-start gap-8"
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
        <HeroBanner heroData={heroData} />
      </div>
    </>
  );
};

export default Hero;
