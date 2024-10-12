import { CiLocationOn, CiDollar } from "react-icons/ci";
export default function Job({job}) {
    console.log(job)
    const {logo,company_name,job_description,job_responsibility,job_title,job_type,location,remote_or_onsite,salary}=job;
  return (
    <div>
<div className="card card-compact bg-base-100 shadow-xl mx-auto">
  <figure>
    <img
      src={logo}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 border rounded font-bold mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 border rounded font-bold  mr-4">{job_type}</button>
    </div>
   <div className="flex gap-5">
   <div>
        <h2 className="text-xl flex items-center mb-2"><CiLocationOn />{location}</h2>
    </div>
    <div>
        <h2 className="text-xl flex items-center mb-2"><CiDollar />{salary}</h2>
    </div>
   </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
  )
}
