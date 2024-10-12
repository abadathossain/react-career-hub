import { useEffect, useState } from "react"
import Job from "../Job/Job"

export default function FeaturedJobs() {
    const [jobs, setJobs]=useState([])
    const [dataLength, setDataLength]=useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  return (
   <>
    <div className="text-center">
       <h1 className="text-4xl font-bold">FeaturedJobs:{jobs.length}</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, odit.</p>
       <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
        }
       </div>
    </div>
    <div className={dataLength===jobs.length && 'hidden'}>
        <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
    </div>
   </>
  )
}
