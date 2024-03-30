const HeroBanner = ({ heroData }) => {
  return (
    <>
      <div className="relative px-16 ">
        <img
          src={heroData.alternateAvatars[0].url}
          alt="profile image"
          className=" rounded-full"
        />
        <div className="absolute bottom-[150px] -left-[5px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
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
        <div className="absolute bottom-[100px] right-[20px] flex items-center justify-center gap-2 px-4 py-2 bg-white border border-black rounded-full">
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
