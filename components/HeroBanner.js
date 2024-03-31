const HeroBanner = ({ heroData }) => {
  return (
    <>
      <div className="relative px-16 ">
        <img
          src={heroData.alternateAvatars[0].url}
          alt="profile image"
          className=" rounded-full overflow-hidden"
        />
        <div className="absolute bottom-[75px] -left-[15px] sm:bottom-[150px] sm:-left-[5px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
          <span className="flex items-start text-5xl">
            <span className="">{heroData.exp_year}</span>
            <span className="text-green-500">+</span>
          </span>
          <span className="text-sm">
            YEARS OF
            <br />
            <span className="text-green-500">EXPERIENCE</span>
          </span>
        </div>
        <div className="absolute bottom-[50px] -right-[15px] sm:bottom-[100px] sm:right-[20px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
          <span className="flex text-5xl">{heroData.some_total}</span>
          <span className="text-sm">
            COMPLETED
            <br />
            <span className="text-green-500">PROJECTS</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
