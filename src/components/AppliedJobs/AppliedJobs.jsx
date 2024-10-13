import { useEffect, useState } from "react"
import { getStoredJobs } from "../../utilities/localStorage"
import { useLoaderData } from "react-router-dom"

export default function AppliedJobs() {
  const jobs = useLoaderData()

  const [appliedJobs, setAppliedJobs] = useState([])
  const [displayJobs, setDisplayJobs] = useState([])
  const { logo, company_name, job_description, job_responsibility, job_title, job_type, location, remote_or_onsite, salary } = appliedJobs;

  const handlejobsFilter = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs)
    } else if (filter === 'remote') {

      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
      setDisplayJobs(remoteJobs)
    }else if (filter === 'onsite') {

      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
      setDisplayJobs(onsiteJobs)
    }

  }
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
      setDisplayJobs(appliedJobs)
    }

  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold">AppliedJobs:{appliedJobs.length}</h1>
      <details className="dropdown">
        <ul>
          <li onClick={() => handlejobsFilter('all')}><a href="">All</a></li>
          <li onClick={() => handlejobsFilter('remote')}><a href="">Remote</a></li>
          <li onClick={() => handlejobsFilter('onsite')}><a href="">Onsite</a></li>
        </ul>
      </details>
      <ul>
        {
          displayJobs.map(appliedJob => <li key={appliedJob.id} ><span>{appliedJob.job_title}</span><span> <img src={appliedJob.logo} alt="" /></span></li>)
        }
      </ul>
    </div>
  )
}
