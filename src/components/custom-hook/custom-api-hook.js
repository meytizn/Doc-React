import Axios from "axios"
import { useQuery } from "react-query"



export const useApiHook =()=>{



  const {data}=useQuery(['cat'],()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
  })



  return {data}





}