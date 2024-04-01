"use client";

import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const cardWidth = 400; //width of the individual cards

const Services = ({ servicesData }) => {
  //console.log(servicesData);
  // const [hover, setHover] = useState(false);
  // const [counter, setCounter] = useState(0);
  const [scrollPosi, setScrollPosi] = useState(0);
  const carouselRef = useRef(null);

  //reset the values when not hovering
  // const handleMouseLeave = () => {
  //   setHover(false);
  //   setCounter(0);
  // };

  //auto scroll function when hover
  // const handleHover = () => {
  //   const newScrollPosi = scrollPosi;
  //   setTimeout(() => {
  //     carouselRef.current.scrollLeft = newScrollPosi;
  //     setScrollPosi(scrollPosi + 50);

  //     setCounter(counter + 1);

  //     console.log(counter);
  //   }, [1000]);
  // };

  // useEffect(() => {
  //   if (hover) {
  //     handleHover();
  //   }
  // }, [hover, counter]);

  //scroll function when button is clicked
  const handleScroll = (scrollAmt) => {
    // setCounter(0);
    const newScrollPosi = scrollPosi + scrollAmt;
    setScrollPosi(newScrollPosi);
    carouselRef.current.scrollLeft = newScrollPosi;
  };

  return (
    <>
      <div className=" flex flex-col gap-6 py-8">
        <div className="font-bold flex flex-col items-center gap-2">
          <div className="text-5xl">WHAT I DO</div>
          <div className="flex items-end gap-4">
            <span className="text-green-600">MY</span>
            <span className="text-2xl">Services</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            ref={carouselRef}
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => handleMouseLeave()}
            className="grid grid-flow-col gap-6  overflow-scroll remove-scrollbar "
          >
            {servicesData.map((item, i) => {
              return <ServiceCard service={item} key={i} />;
            })}
          </div>
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => {
                handleScroll(-cardWidth);
              }}
              className="hover:bg-green-500 border border-black rounded-full p-2"
            >
              <img
                src="/left-arrow.png"
                alt="left arrow icon"
                className="w-5 h-5"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => {
                handleScroll(cardWidth);
              }}
              className="hover:bg-green-500 border border-black rounded-full p-2"
            >
              <img
                src="/right-arrow.png"
                alt="right arrow icon"
                className="w-5 h-5"
              />
            </motion.button>
          </div>
        </div>
        {/* <ServiceCard service={servicesData[3]} /> */}
      </div>
    </>
  );
};

export default Services;
