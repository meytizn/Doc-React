import { useContext, useState } from "react"
import { Usecontext } from "../../pages/managment-state"



const Child_Usecontext =()=>{
  const {name} = useContext(Usecontext)
  const [myname,setMyname]=useState("")

  return (
    <div>
           {myname}
           {name ==="choose a name " ? "to be change" : name }
    </div>
  )
}
export default Child_Usecontext