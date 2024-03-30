"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

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
      <div className=" bg-yellow-50 shadow-2xl border border-black rounded-lg p-4 flex flex-col gap-8">
        <div>
          <img
            src={projectData.image.url}
            alt="project image"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
        <div className="text-2xl font-bold hover:text-green-500">{projectData.title}</div>
        <button onClick={openProjectModal} className="font-bold text-xl hover:text-white hover:border hover:border-black hover:rounded-full hover:bg-green-500 hover:px-4 hover:py-2">See project</button>
        </div>

      </div>
      {modal&&<div className="modal-backdrop" />}
      {modal&&<ProjectModal projectData={projectData} closeProjectModal={closeProjectModal} />}
    </>
  );
};

export default ProjectCard;
