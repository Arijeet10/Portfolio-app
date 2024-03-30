const ProjectCard = ({ projectData }) => {
  return (
    <>
      <div className="shadow-2xl border border-black rounded-lg p-2 flex flex-col items-start gap-8">
        <div>
          <img
            src={projectData.image.url}
            alt="project image"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold">
            <div className="text-green-500 uppercase">
              {projectData.techStack.map((item) => {
                return <span>{item}, </span>;
              })}
            </div>
            <div className="text-2xl">{projectData.title}</div>
          </div>
          <div>{projectData.description}</div>
        </div>
        <button className="font-bold">See project</button>
      </div>
    </>
  );
};

export default ProjectCard;
