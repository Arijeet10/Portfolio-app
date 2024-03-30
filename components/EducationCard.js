"use client";

import { useEffect, useState } from "react";

const EducationCard = ({ educationData }) => {
  const startDate = educationData.startDate.split("-");
  const startYear = startDate[0];
  const endDate = educationData.endDate.split("-");
  const endYear = endDate[0];
  const jobLocation = educationData.jobLocation.split(",");
  const jobCity = jobLocation[0];

  const [hideData, setHideData] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setHideData(!hideData);
  };

  useEffect(() => {
    if (educationData._id !== "65f1fe900556c3f887e9db94") {
      setHideData(true);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl">{educationData.company_name}</div>
        <div
          className={`${
            hideData && "hidden"
          } flex flex-col justify-center items-start font-bold`}
        >
          <div>{educationData.jobTitle}</div>
          <div>
            {startYear}-{endYear}, {jobCity.toUpperCase()}
          </div>
        </div>
        <div className={`${hideData && "hidden"}`}>{educationData.summary}</div>

        <div className={`m-4 ${hideData && "hidden"}`}>
          <ul className="list-disc">
            {educationData.bulletPoints.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-t-2 border-black w-full" />
          <button
            onClick={handleClick}
            className=" border border-black rounded-full w-20 h-20 text-3xl"
          >
            {hideData ? "+" : "-"}
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
