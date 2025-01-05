import './css/style.css'
import './App.css';

import { useState } from 'react';


// text value changer by onchange property input through usestate Hook 


function App() {

  const [text , setText]=useState("")

  const change_func=(event)=>{

    console.log(event)

    setText(
        event.target.value
    )
  }

  return (
    <div class="App">

      <input onChange={change_func}></input>

        <h1>{text}</h1>

    </div>
  )
}

export default App;

