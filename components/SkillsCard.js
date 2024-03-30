const SkillsCard = ({skill}) => {
    //console.log(skill)

    const lineWidth=skill.percentage.toString()+"%";
    return ( 
        <>
            <div className=" p-2 flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between font-bold">
                    <div className="flex items-center">
                        <img
                            src={skill.image.url}
                            alt="skill logo"
                            className="w-10 h-10"
                        />
                        <div>
                            {skill.name}
                        </div>
                    </div>
                    <div>
                        <span>{skill.percentage}</span>
                        <span className="text-green-500">%</span>
                    </div>
                </div>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className={`border-t-2 border-black w-[${lineWidth}]`} />
                
            </div>
        </>
     );
}
 
export default SkillsCard;