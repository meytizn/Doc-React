import { useParams } from "react-router-dom";


const Profile=()=>{
  const {name ,id}=useParams()
  return (
    <div>
      <h3>{name} profile with the id : {id}</h3>
    </div>
  )
}

export default Profile ;