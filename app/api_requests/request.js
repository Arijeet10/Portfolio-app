//API end point
const url="https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

//get all data from API
export const getAPIData=async()=>{

    try {
        const res=await fetch(url,{
            method:"GET",
            headers:{
                content:"application/json"
            },
            cache:"no-store"
        })
        const data=res.ok?await res.json():Promise.reject(res);

        return data;
         
    } catch (error) {
        console.log("Error:",error)
    }
}