import { createClient } from "contentful";
import { useEffect, useState } from "react";



const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});


export const useFetchProjects=()=>{
    const [loading,setLoading]=useState(true)
    const [projects,setProjects]=useState([])
    const getData=async ()=>{
       const response= client.getEntries({
            content_type:'projects'
        }).then(res=>{
            const project=res.items.map((i)=>{  
                const {title,url,image}=i.fields
                const id=i.sys.id
                const img=image.fields.file.url
                return {title,url,id,img}
            })
            setProjects(project)
            setLoading(false)
        }).catch(err=>{
            console.log(err);
            setLoading(false)
        }) 
    }
    useEffect(()=>{
        getData();
    },[])
    
    return {loading,projects}
}

