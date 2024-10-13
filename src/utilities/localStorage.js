const getStoredJobs=()=>{
    const jobsApplications=localStorage.getItem('job-application')
    if(jobsApplications){
        return JSON.parse(jobsApplications)
    }
    return []
}

const addToLocalStorage=(id)=>{
    const jobApply=getStoredJobs()
    jobApply.push(id)
    localStorage.setItem('job-application',JSON.stringify(jobApply) )
}
export {getStoredJobs,addToLocalStorage}