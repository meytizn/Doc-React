import './css/style.css'
import './App.css';

import { useState } from 'react';


// text value changer by onchange property input through usestate Hook 


function App() {

const [text,setText]=useState(true) 

  const btnshowoff=()=>{
    setText(
      text !== true
    )    
  }

  return (
    <div class="App">
       
        <button onClick={btnshowoff}>show / hide </button>

        { text &&  <h1>watch me        :)  </h1>}
    
    </div>
  )
}

export default App;

