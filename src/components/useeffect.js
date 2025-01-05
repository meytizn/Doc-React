import './css/style.css'
import './App.css';

import { useEffect, useState } from 'react';


function App() {

  const [color, setColor] = useState("red");


  // mounting stage the unmounting stage after return by ananymous func

  useEffect(()=>{


    console.log("Component did mount ")

    return ()=>{
        console.log("Component did Unmount ")
    }


  },[])


  // updating stage

  useEffect(()=>{
    console.log("Component is at updating stage ")
   
  },[color])


  return (

    <div class="App">
      <h1>My favorite color is {color}!</h1>

      <button onClick={()=>{setColor("yellow")}}></button>
    </div>

  )
}

export default App;

