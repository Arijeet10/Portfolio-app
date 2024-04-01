"use client";

import TestimonialCard from "./TestimonialCard";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
//import Marquee from "react-fast-marquee";

const cardWidth = 350; //width of the individual cards

const Testimonials = ({ testimonialData }) => {
  const [hover, setHover] = useState(false);
  const [counter, setCounter] = useState(0);
  const [scrollPosi, setScrollPosi] = useState(0);
  const carouselRef = useRef(null);

  //reset the values when not hovering
  const handleMouseLeave = () => {
    setHover(false);
    setCounter(0);
  };

  //auto scroll function when hover
  const handleHover = () => {
    const newScrollPosi = scrollPosi;
    setTimeout(() => {
      carouselRef.current.scrollLeft = newScrollPosi;
      setScrollPosi(scrollPosi + 60);

      setCounter(counter + 1);

      console.log(counter);
    }, [1000]);
  };

  useEffect(() => {
    if (hover) {
      handleHover();
    }
  }, [hover, counter]);

  //scroll function when button is clicked
  const handleScroll = (scrollAmt) => {
    setCounter(0);
    const newScrollPosi = scrollPosi + scrollAmt;
    setScrollPosi(newScrollPosi);
    carouselRef.current.scrollLeft = newScrollPosi;
  };

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = testimonialData.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, testimonialData]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  return (
    <>
      <div className="flex flex-col gap-8 py-8 ">
        <div className="font-bold flex flex-col gap-4 items-center">
          <div className="text-3xl sm:text-5xl">TESTIMONIALS</div>
          <div className="flex items-end gap-4">
            <span className="text-green-500 text-sm sm:text-base ">WHAT</span>
            <span className="text:xl sm:text-3xl">Customers Say</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            ref={carouselRef}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => handleMouseLeave()}
            className=" grid grid-flow-col grid-rows-1 gap-8 px-8 sm:px-16 translate-x-[-100]  overflow-hidden remove-scrollbar"
          >
            {testimonialData.map((item, i) => {
              return <TestimonialCard testimonialData={item} key={i} />;
            })}
          </div>
          <div className="flex items-center justify-between">
            <motion.div
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
            </motion.div>
            <motion.div
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
            </motion.div>
          </div>
        </div>

        {/* <div className="">
          <div className="section">
            {testimonialData.map((item, i) => {
              let position = "nextSlide";
              if (i === index) {
                position = "activeSlide";
              }
              if (
                i === index - 1 ||
                (index === 0 && i === testimonialData.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <div className={`article ${position}`}>
                <TestimonialCard testimonialData={item} key={i}  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setIndex(index - 1)}
              onMouseEnter={() => setHover(false)}
              className="border border-black px-4 py-2"
            >
              LEFT
            </button>
            <button
              onClick={() => setIndex(index + 1)}
              onMouseEnter={() => setHover(false)}
              className="border border-black px-4 py-2"
            >
              RIGHT
            </button>
          </div>
        </div> */}

        {/* <div>
          <div
            id="controls-carousel"
            class="relative w-full"
            data-carousel="static"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {testimonialData.map((item, i) => {
                  return (
                    <TestimonialCard
                      testimonialData={item}
                      key={i}
                      data-carousel-item
                    />
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Testimonials;
