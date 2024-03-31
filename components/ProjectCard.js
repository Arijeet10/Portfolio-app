"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import {motion} from "framer-motion";

const ProjectCard = ({ projectData }) => {


  const [modal,setModal]=useState(false);
  const openProjectModal=(e)=>{
    e.preventDefault();
    setModal(true);
  }

  const closeProjectModal=(e)=>{
    e.preventDefault();
    setModal(false);
  }

  return (
    <>
      <motion.div 
        whileHover={{scale:1.1}}
        transition={{type:"spring",stiffness:100}}
        className=" bg-yellow-50 shadow-2xl border border-black rounded-lg p-4 flex flex-col gap-8"
      >
        <div>
          <motion.img
            whileHover={!modal && {scale:[0.8,1]}}
            transition={!modal && { type: "spring", stiffness: 100 }}

            src={projectData.image.url}
            alt="project image"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
        <div className="text-2xl font-bold hover:text-green-500">{projectData.title}</div>
        <motion.button
         whileHover={{scale:1.1}}
         transition={{type:"spring",stiffness:400,damping:10}}
         onClick={openProjectModal} 
         className="font-bold text-xl hover:text-white hover:border hover:border-black hover:rounded-full hover:bg-green-500 hover:px-4 hover:py-2"
        >
          See project
        </motion.button>
        </div>

      </motion.div>
      {modal&&<div className="modal-backdrop z-50" />}
      {modal&&<ProjectModal projectData={projectData} closeProjectModal={closeProjectModal} />}
    </>
  );
};

export default ProjectCard;
