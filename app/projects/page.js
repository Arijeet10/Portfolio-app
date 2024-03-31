import ProjectCard from "@/components/ProjectCard";
import { getAPIData } from "../api_requests/request";

const ProjectPage = async() => {
    const { user } = await getAPIData(); //get api data
    const projectData=user.projects;
    return ( 
        <>
            <div className=" bg-red-50 flex flex-col items-center gap-4 p-8">
                <div className="flex flex-col gap-4 items-center font-bold">
                    <div className="text-3xl sm:text-5xl">PROJECTS</div>
                    <div className="flex items-end gap-4">
                        <span className="text-green-500">MY</span>
                        <span className="text-l sm:text-3xl">Cases</span>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4">
                    {projectData.map((item,i)=>{
                        const revOrder=projectData[projectData.length-1-i]
                        return <ProjectCard projectData={revOrder} />
                    })}
                </div>

            </div>
        </>
     );
}
 
export default ProjectPage;