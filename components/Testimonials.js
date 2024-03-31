"use client";

import TestimonialCard from "./TestimonialCard";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ testimonialData }) => {

  const [hover,setHover]=useState(false);

  

  return (
    <>
      <div
        className="flex flex-col gap-8 py-8 "
      >
        <div className="font-bold flex flex-col gap-4 items-center">
          <div className="text-3xl sm:text-5xl">TESTIMONIALS</div>
          <div className="flex items-end gap-4">
            <span className="text-green-500 text-sm sm:text-base ">WHAT</span>
            <span className="text:xl sm:text-3xl">Customers Say</span>
          </div>
        </div>
        <Marquee
          play={hover}
          pauseOnClick
        >
        <div
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          className="grid grid-flow-col grid-rows-1 gap-8 px-8 sm:px-16  overflow-scroll remove-scrollbar"
        >
          {testimonialData.map((item, i) => {
            return <TestimonialCard testimonialData={item} key={i} />;
          })}
        </div>
        </Marquee>
        {/* <div>
                    <TestimonialCard testimonialData={testimonialData[0]} />
                </div> */}
      </div>
    </>
  );
};

export default Testimonials;
