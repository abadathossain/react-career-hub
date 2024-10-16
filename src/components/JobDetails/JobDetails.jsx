import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage } from "../../utilities/localStorage";

export default function JobDetails() {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(job)
    const { logo, company_name, job_description, job_responsibility, job_title, job_type, location, remote_or_onsite, salary } = job;

    const handleApply = () => {
        addToLocalStorage(idInt)
        toast("Wow so easy!");
    }


    return (
        <div>
            <h1>JobDetails:{id}</h1>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="md:col-span-3 border">
                    <h1 className="text-4xl font-medium">{job_title}</h1>
                    <p>{job_description}</p>

                </div>
                <div className="border">
                    <h1>side area</h1>
                    <button onClick={handleApply} className="btn btn-primary">Apply Job</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
