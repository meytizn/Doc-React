import './css/style.css'
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  useEffect(() => {

    // Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    //   console.log(res.data)
    //   setAge(res.data.age)
    // })

    fetchbtn()

  }, [])


  const fetchbtn = (event) => {

    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data)
      setAge(res.data.age)
    })

  }


  return (

    <div class="App">

      <input placeholder='Enter a name ' onChange={(event) => setName(event.target.value)}></input>
      <button onClick={fetchbtn} >fetch</button>
      <h3>{name} is about {age}</h3>
    </div>

  )
}

export default App;

// method 1
// fetch("https://catfact.ninja/fact").then((req)=>req.json()).then((data)=>{console.log(data)})