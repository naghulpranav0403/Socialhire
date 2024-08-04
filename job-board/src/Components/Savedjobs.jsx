import React from 'react'
import Ourjob from './Ourjob';
const Savedjobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };
  return (
    <div>
      
    </div>
  )
}

export default Savedjobs
