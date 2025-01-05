import { useState , useContext} from "react"
import { Usecontext } from "../../pages/managment-state"




const Sub_Child_Usecontext = (props) => {
  const {name,setName}=useContext(Usecontext)
  const [myname,setMyname]=useState("")

  const changebtn=()=>{
    setName(myname)
  }

  return (
    <div>
      {/* {myname} */}
      <input placeholder="in here ... " onChange={(event)=>{setMyname(event.target.value)}}></input>
      <button onClick={changebtn}>{name ==="choose a name " ? "Submit" : `enjoy ${name}    :) ` }</button>
    </div>
  )
}
export default Sub_Child_Usecontext