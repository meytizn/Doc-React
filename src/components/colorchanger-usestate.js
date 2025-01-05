import './css/style.css'
import './App.css';

import { useState } from 'react';


// text value changer by onchange property input through usestate Hook 


function App() {

  const [color , setColor]=useState("red")

  const colorchanger=()=>{
    setColor(
      color==="red" ? "green" : "red"
    )
  }

  return (
    <div class="App">
    
        <h1 style={{color:color }}>Hello from color world </h1>
       
        <button onClick={colorchanger}>change color  </button>

    
    </div>
  )
}

export default App;

