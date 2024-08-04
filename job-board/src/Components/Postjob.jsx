import React, { useState } from 'react';
import './Postjob.css';
import Navigation from './Navigation';
import Socialhire from './Socialhire1.png';
const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    description: '',
    requirements: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
   
      console.log(formData);
     
      setFormData({
          jobTitle: '',
          companyName: '',
          location: '',
          jobType: '',
          description: '',
          requirements: '',
          salary: ''
    });
};

return (
    <>
    
    <div className="nav-22">
    <Navigation/>
      </div>
    <div className='post4'>

    <form className="post1" onSubmit={handleSubmit}>
 
        <img src={Socialhire}  className="logo4" />
       
      <h2>Post a Job</h2>
      <div className="post2">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="jobType">Job Type</label>
        <select
          id="jobType"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          required
          >
          <option value="">Select Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <div className="post2">
        <label htmlFor="description">Job Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="requirements">Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          />
      </div>
      <button  className="post3"type="submit">Post Job</button>
    </form>
          </div>
          </>
  );
};

export default PostJob;