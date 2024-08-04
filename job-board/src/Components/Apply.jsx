import React, { useRef, useState } from 'react';
import './Apply.css';
import Socialhire from './Socialhire1.png';
const Apply = () => {
  const [name, setName] = useState('');
  const fileInputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = fileInputRef.current?.files[0]?.name || 'No file uploaded';
    alert(`Application Submitted!\nName: ${name}\nResume Uploaded: ${fileName}`);
   
    setName(''); 
    fileInputRef.current.value = '';
  };

  return (
    <div className="apply-job">
      <div className="apply1">
        <form onSubmit={handleSubmit} className='apply3'>
        <header className="apply2">
        <img src={Socialhire}  className="logo3" />
    
          
        </header>
          <div className="form-group">
            <label className="ll"id="name-label" htmlFor="name">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="myFile">
              Upload Your Resume
            </label>
            <input
              type="file"
              id="myFile"
              name="filename"
              ref={fileInputRef} 
              required
            />
          </div>
          <div className="form-group">
       
        <button
              type="submit"
              className="submit-button1"
              >
              Submit
            </button>
                 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;
