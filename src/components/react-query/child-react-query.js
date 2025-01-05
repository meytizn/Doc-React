import Axios from "axios"
import { useQuery } from "react-query"




export const Child_react_query = ()=>{


  const {data : catData ,isLoading,isError,error ,refetch}=useQuery(["cat"],()=>{ 
     return Axios.get("https://catfact.ninja/fact").then((res)=>res.data) 
  })


  if(isLoading){
    return <h3>Loading ... </h3>
  }

  
  if(isError) return <h3>there is an {error.message}</h3>
  


  // Main Return
  return(
    <div>
      
      <h4 class="text-green-800 font-5">child is here using (useQuery Hook)  and (Axios Library ) to show you API . </h4>


      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
       rounded inline-flex items-center my-5" onClick={refetch}>
        refetch</button>
     
      <br/><br/><br/><br/>


      <div class="bg-slate-300">
      <h3>{catData ?.fact}</h3>
      </div>


    </div>
  )
}