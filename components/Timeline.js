import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Timeline = ({ timelineData }) => {
  const educationData = timelineData.filter((item) => {
    if (item.forEducation == true) {
      return item;
    }
  });

  const experienceData = timelineData.filter((item) => {
    if (item.forEducation == false) {
      return item;
    }
  });

  return (
    <>
      <div className="bg-[#faf5e1] py-8">
        <div className="font-bold flex flex-col items-center">
          <div className="text-3xl sm:text-5xl ">TIMELINE</div>
          <div className="flex items-end gap-4">
            <span className="text-green-500">MY</span>
            <span className="text-l sm:text-3xl">Story</span>
          </div>
        </div>
        <div className="sm:flex sm:justify-center sm:gap-4 p-4">
          <div className=" flex flex-col gap-4">
            <div className="text-center text-2xl font-bold">Education</div>
            <div className="border-t-2 border-black w-full" />
            <div>
              {educationData.map((item) => {
                return <EducationCard educationData={item} />;
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="text-center text-2xl font-bold">Experience</div>
            <div className="border-t-2 border-black w-full" />
            <div>
              {experienceData.map((item) => {
                return <ExperienceCard experienceData={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
