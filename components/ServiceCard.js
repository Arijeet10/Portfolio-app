"use client";

import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  console.log(service);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: [100] }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white relative border  shadow-2xl rounded-lg w-[400px] h-[400px] flex flex-col items-start justify-end gap-40 px-8 py-16"
      >
        <div className="flex flex-col items-start gap-2 ">
          <div className="text-3xl font-bold">{service.name}</div>
          <div>{service.desc}</div>
        </div>
        <div className="font-bold text-xl">{service.charge}</div>
        <div
          className={`absolute top-0 right-0 bottom-0 left-0 opacity-1 hover:opacity-5 ${
            service._id == "65b3e2f6b48589dfcae1843b" && "bg-white"
          }`}
        >
          <img
            src={service.image.url}
            alt="service image"
            className="w-[400px] h-[400px] rounded-lg"
          />
        </div>
      </motion.div>

      {/* <div className="relative border border-black rounded-lg w-[500px] h-[500px]">
        <div className=" flex flex-col items-start justify-end gap-4">
          <div className="flex flex-col items-start">
            <div>{service.name}</div>
            <div>{service.desc}</div>
          </div>
          <div>{service.charge}</div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 hover:opacity-100 ">
          <img
            src={service.image.url}
            alt="service image"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div> */}
    </>
  );
};

export default ServiceCard;
