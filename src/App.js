import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Route,Routes,Link} from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=> {
    return(
      <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        </Routes>
      </Router>

      {/* <Link to='/' className='nav-link active'>Home</Link>
      <Link to='/about' className='nav-link'>About</Link>
      <Link to='/contact' className='nav-link'>Contact</Link>
      <Link to='/services' className='nav-link'>Services</Link> */}
      </>
    )
}

export default App;