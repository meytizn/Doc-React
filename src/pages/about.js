import { useNavigate } from "react-router-dom";



const About=()=>{
  let navigator=useNavigate()
  return (
    <div>
      <h3>About page </h3> 
      <button onClick={()=>{navigator('/')}}>go to home page </button>
    </div>
  )
}

export default About ;