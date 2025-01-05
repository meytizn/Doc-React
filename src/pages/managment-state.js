
import { createContext, useState } from 'react';
import '../css/style.css'
import Child_Usecontext from '../components/usecontext/child';
import Sub_Child_Usecontext from '../components/usecontext/sub-child';


// using usecontext in js as a component 

export const Usecontext = createContext()

// end 



// im using this component as the parrent coponent

const Managmentstate = () => {

  const [name,setName]=useState("choose a name ")

  return (
     <div>
      
    <Usecontext.Provider value={{name,setName}}>

      <div class="titlenav">
        <h3>usecontext optimizes managment state by removing properties in parent then props in childs .   </h3> <br/>

      <div style={{display:"flex" ,justifyContent:"space-around"}}>

<div>Parrent <br/><br/><br/> {name}</div>

<div>parrent - Child  <br/><br/><br/> <Child_Usecontext /></div>

<div>parrent - Child - Child  <br/><br/><br/> <Sub_Child_Usecontext/></div>

      </div>


      </div>


</Usecontext.Provider>
    
    </div>
  )
}

export default Managmentstate;