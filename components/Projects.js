"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ projectData }) => {
  // const openProjectsPage=(e)=>{
  //     e.preventDefault();

  // }

  return (
    <>
      <div
        className="  flex flex-col items-center gap-4 py-8"
      >
        <div className="flex flex-col gap-4 items-center font-bold">
          <div className="text-3xl sm:text-5xl">PROJECTS</div>
          <div className="flex items-end gap-4">
            <span className="text-green-500">MY</span>
            <span className="text-l sm:text-3xl">Cases</span>
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4">
          {projectData.map((item, i) => {
            if (i < 6) {
              const revOrder = projectData[projectData.length - 1 - i];
              return <ProjectCard projectData={revOrder} key={i} />;
            }
          })}
        </div>
        <Link href="/projects">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="border border-black rounded-full font-bold text:sm sm:text-lg px-4 py-4 shadow-effect hover:bg-green-500 hover:text-white"
          >
            VIEW MORE
          </motion.div>
        </Link>

        {/* <div>
                    <ProjectCard projectData={projectData[0]} />
                </div> */}
      </div>
    </>
  );
};

export default Projects;
