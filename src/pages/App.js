import './css/style.css'
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about'
import Contact from './pages/contact';
import Profile from './pages/profile';


function App() {

  return (

    <div class="App" >

      <BrowserRouter>
        <header style={{ backgroundColor: "black", width: "100%" }}>
          <Link to='/' style={{ color: "red", display: "inline-block", }}>home</Link>
          <Link to='contact/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>about</Link>
          <Link to='about/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>contact</Link>
          <Link to='profile/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>profile</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="profile/:name?/" element={<Profile />} />
          <Route path="profile/:name/:id?/" element={<Profile />} />
          <Route path="*" element={<h1>Not found </h1>} />
        </Routes>
        <footer style={{ backgroundColor: "black", width: "100%", color: "white" }}>Footer</footer>
      </BrowserRouter>

    </div>

  )
}

export default App;

// method 1
// fetch("https://catfact.ninja/fact").then((req)=>req.json()).then((data)=>{console.log(data)})