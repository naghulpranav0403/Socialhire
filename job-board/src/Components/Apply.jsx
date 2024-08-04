import React, { useState } from 'react';
import './Apply.css';
import Socialhire from './Socialhire1.png';

const Apply = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = file?.name || 'No file uploaded';
    alert(`Application Submitted!\nName: ${name}\nResume Uploaded: ${fileName}`);

    setName('');
    setFile(null);
  };

  return (
    <>
    <div className="app1">
    <div className="apply-job">
      <div className="apply1">
        <form onSubmit={handleSubmit} className='apply3'>
          <header className="apply2">
            <img src={Socialhire} className="logo3" alt="Logo" />
          </header>
          <div className="apply4">
            <label className="ll" id="name-label" htmlFor="name">
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
          <div className='apply4'>
            <label htmlFor="myFile">
              Upload Your Resume
            </label>
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <div className="apply4">
            <button type="submit" className="submit-button1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
              </>
  );
}

export default Apply;
