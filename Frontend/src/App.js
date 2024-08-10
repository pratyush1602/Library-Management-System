import './App.css';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import React, { useState } from 'react';
import About from './component/About';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [department, setDepartment] = useState('')
  // const [searchquery, setsearchquery] = useState('')
  return (
    <>
      <Router>
        <Navbar setDepartment={setDepartment} />
        <Routes>

          <Route exact path="/about" element={<About />} />
          <Route exact path="/Computer Science"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Civil Engineering"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Chemical Engineering"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Mechanical Engineering"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Electrical Engineering"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Engineering Physics"  element= {<Dashboard department={department} />}/>
          <Route exact path="/Home"  element= {<Home/>}/>
        </Routes>
      </Router >
    </>
  );
}

export default App;
