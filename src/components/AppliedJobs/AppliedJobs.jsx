import { useEffect, useState } from "react"
import { getStoredJobs } from "../../utilities/localStorage"
import { useLoaderData } from "react-router-dom"

export default function AppliedJobs() {
  const jobs = useLoaderData()

  const [appliedJobs, setAppliedJobs]=useState([])
  const { logo, company_name, job_description, job_responsibility, job_title, job_type, location, remote_or_onsite, salary } = appliedJobs;

  useEffect(() => {
    const storedApplied = getStoredJobs()
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => storedApplied.includes(job.id))
      // const jobApplied = []
      // for (const id of storedApplied) {
      //   const job = jobs.find(job => job.id === id)
      //   if (job) {
      //     jobApplied.push(job)
      //   }
      // }
      // console.log(jobs,jobsApplied)
      setAppliedJobs(jobsApplied)
    }
    
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold">AppliedJobs:{appliedJobs.length}</h1>
      <ul>
        {
          appliedJobs.map(appliedJob=> <li key={appliedJob.id} ><span>{appliedJob.job_title}</span><span> <img src={appliedJob.logo} alt="" /></span></li>)
        }
      </ul>
    </div>
  )
}
