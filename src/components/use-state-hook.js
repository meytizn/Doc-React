import './css/style.css'
import './App.css';

import { useState } from 'react';




// usestates act such a dynamic variable and browswer needs state to change value not a const


function App() {

  const [number , setNumber]=useState(0)

  const addbtn =()=>{
    setNumber(
      number+1
    )
  }

  return (
    <div class="App">

      <h1>{number} </h1>
      <button onClick={()=>{setNumber(number+1)}}>increase</button>
      <button onClick={()=>{setNumber(number-1)}}>decrease</button>
      <button onClick={addbtn}>increase external </button>

    </div>
  )
}

export default App;

