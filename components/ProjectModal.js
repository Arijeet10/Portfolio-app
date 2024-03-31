import Link from "next/link";

const ProjectModal = ({projectData,closeProjectModal}) => {
    return ( 
        <>
      <div className="z-50 bg-slate-50 absolute w-full sm:w-2/4  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl border border-black rounded-lg p-4 flex flex-col gap-8">
        <div>
            <div
                onClick={closeProjectModal}
                className="flex items-center justify-end"
            >
                <img 
                    src="/close.png"
                    alt="close icon"
                    className="w-10 h-10"
                />
            </div>
          <img
            src={projectData.image.url}
            alt="project image"
            className="rounded-lg object-cover h-60 w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="font-bold">
            <div className="text-green-500 uppercase">
              {projectData.techStack.map((item,i) => {
                return <span>{i!==0&&", "}{item}</span>;
              })}
            </div>
            <div className="text-2xl">{projectData.title}</div>
          </div>
          <div>{projectData.description}</div>
        </div>
        <div className="font-bold flex items-center justify-center gap-4">
        <Link 
            onClick={closeProjectModal}
            href={projectData.githuburl} 
            className="border border-black rounded-full px-4 py-2 hover:bg-green-500 hover:text-white"
        
        >
            GitHuB
        </Link>
        <Link 
            onClick={closeProjectModal}
            href={projectData.liveurl}
            className="border border-black rounded-full px-4 py-2 hover:bg-green-500 hover:text-white"
        >
            Live
        </Link>
        </div>
      </div>
        </>
     );
}
 
export default ProjectModal;