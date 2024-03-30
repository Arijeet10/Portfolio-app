"use client";

import ServiceCard from "./ServiceCard";

const Services = ({servicesData}) => {
    //console.log(servicesData);
    return ( 
        <>
            <div className="bg-[#faf5e1] flex flex-col gap-6 py-8">
                <div className="font-bold flex flex-col items-center gap-2">
                    <div className="text-5xl">
                        WHAT I DO
                    </div>
                    <div className="flex items-end gap-4">
                        <span className="text-green-600">MY</span>
                        <span className="text-2xl">Services</span>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-6  overflow-scroll remove-scrollbar">
                    {servicesData.map(item=>{
                        return <ServiceCard service={item} />
                    })}
                </div>
                {/* <ServiceCard service={servicesData[3]} /> */}
            </div>
        </>
     );
}
 
export default Services;