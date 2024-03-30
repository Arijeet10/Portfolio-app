import SkillsCard from "./SkillsCard";

const Skills = ({skillsData}) => {
    //console.log(skillsData)
    return ( 
        <>
            <div className=" py-8">
                <div className="font-bold flex flex-col items-center gap-4">
                    <div className="text-2xl sm:text-5xl">PROFESSIONAL SKILLS</div>
                    <div className="flex items-end justify-center gap-4">
                        <span className="text-green-500">MY</span>
                        <span className="text-l sm:text-3xl">Talent</span>
                    </div>
                </div>
                <div className="grid sm:grid-flow-row sm:grid-cols-2 md:grid-cols-3 justify-center gap-2 p-2 m-2">
                {skillsData.map((item,i)=>{
                    {/* reverse map the array */}
                    const sequencedData=skillsData[skillsData.length-1-i]
                    return  <SkillsCard skill={sequencedData} />
                })}
                </div>
                {/* <SkillsCard skill={skillsData[19]} /> */}
            </div>
        </>
     );
}
 
export default Skills;