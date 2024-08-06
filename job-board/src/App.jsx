import './App.css';
import Home from './Components/Home';
import React,{useState} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from './Components/Apply';
import PostJob from './Components/Postjob';
import TestAPI from './Components/TestAPI';
import Ourjob from './Components/Ourjob';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forget from './Components/Forget';
import News from './Components/News';
function App() {
  
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />  
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
             <Route path="/Ourjob" element={<Ourjob/>} />
             <Route path="/Apply" element={<Apply />} /> 
             <Route path="/Navigation" element={<Navigation />} /> 
             <Route path="/Forget" element={<Forget/>} /> 
        
             <Route path="/Postjob" element={<PostJob />} /> 
       
           </Route>
        </Routes>
      </BrowserRouter>  */}
      <News/>
    </>
  );
}

export default App;