import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ testimonialData }) => {
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
        <div className="grid grid-flow-col grid-rows-1 gap-8 overflow-scroll remove-scrollbar">
          {testimonialData.map((item, i) => {
            return <TestimonialCard testimonialData={item} key={i} />;
          })}
        </div>
        {/* <div>
                    <TestimonialCard testimonialData={testimonialData[0]} />
                </div> */}
      </div>
    </>
  );
};

export default Testimonials;
