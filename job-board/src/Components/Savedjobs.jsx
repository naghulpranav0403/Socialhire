import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Saved.css'

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await axios.get('http://localhost:2005/saved-jobs');
        setSavedJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch saved jobs:', error);
      }
    };

    fetchSavedJobs();
  }, [savedJobs]);
 const deleteJob =  (id) =>{
     axios.delete(`http://localhost:2005/delete/${id}`);
 }
  return (
    <>
    
    <div className="job-page1">
      <h1 className="title1">Bookmark</h1>
      <div className="job-listings1">
        {savedJobs.map((job, index) => (
          <div key={index} className="job-item1">
            <div className="job-header1">
              <img src={job.LOGO} className="logo" alt="company logo" />
              <div className="company-info1">
                <h3>{job.COMPANY}</h3>
                <h2>{job.POSITION}</h2>
              </div>
            </div>
            <div className="ro1">
              <p>{job.LOCATION}</p>
              <p>{job.EXPERIENCE}</p>
              <button onClick={()=>deleteJob(job._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SavedJobs;
