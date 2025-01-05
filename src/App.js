import './css/style.css'
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about'
import Contact from './pages/contact';
import Profile from './pages/profile';
import { Nabvar } from './pages/navbar';
import Managmentstate from './pages/managment-state';
import React_query from './components/react-query/react-query';
import { Customhooker } from './components/custom-hook/customhooker';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const client= new QueryClient()

  const [name,setName]=useState("Mohsen")

  return (

    <div class="App" >

<QueryClientProvider client={client}>


      <BrowserRouter>
        <Nabvar/>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="contact/" element={<Contact/>} />
        <Route path="usecontext/" element={<Managmentstate />}/>


          <Route path="about/" element={<About />} />
          <Route path="profile/:name?/" element={<Profile />} />
          <Route path="profile/:name/:id?/" element={<Profile />} />
          
          
          <Route path="react-query/" element={ <React_query /> } />

          <Route path="custom-hook/" element={ <Customhooker/>} />

          <Route path="*" element={<h1>Not found </h1>} />
        </Routes>
        <footer class="bg-black w-full text-green-500 absolute bottom-0" >react-router-dom used beside Tailwind</footer>
      </BrowserRouter>


      </QueryClientProvider>
    </div>

  )
}

export default App;

// method 1
// fetch("https://catfact.ninja/fact").then((req)=>req.json()).then((data)=>{console.log(data)})