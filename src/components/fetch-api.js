import './css/style.css'
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [text, setText] = useState("")


  useEffect(() => {


    //best method 2 : firts npm instal axios 
    // Axios.get("https://catfact.ninja/fact").then((res)=>{

    //   console.log(res.data)
    //   setText(res.data.fact)
    // })


    fetchbtn()

  }, [])




  const fetchbtn = () => {

    Axios.get("https://catfact.ninja/fact").then((res) => {

      console.log(res.data)
      setText(res.data.fact)
    })

  }



  return (

    <div class="App">
      <button onClick={fetchbtn}>fetch data to obj </button>
      <h3>{text}</h3>
    </div>

  )
}

export default App;

// method 1
// fetch("https://catfact.ninja/fact").then((req)=>req.json()).then((data)=>{console.log(data)})