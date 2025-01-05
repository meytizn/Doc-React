
import { QueryClient, QueryClientProvider } from "react-query"
import { useApiHook } from "./custom-api-hook"



export const Customhooker=()=>{

 const{data}=useApiHook()
 
  return (
    <div class="titlenav">useApiHook 

<div class="container my-[80px]"></div>
    <div class=" m-auto w-1/2 bg-slate-300">
      <h3 class="text-white-500">{data?.fact}</h3>
    </div>

    </div>
  )
}