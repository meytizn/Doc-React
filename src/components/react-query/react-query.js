import { QueryClient, QueryClientProvider } from "react-query";
import { Child_react_query } from "./child-react-query";


const React_query =()=>{

  const client=new QueryClient( {
    defaultOptions:{queries:{refetchOnWindowFocus:false}}
  } )

  return (
    <div>

      <QueryClientProvider client={client} >
     
      <div class="titlenav"><h3>Parrent using (QueryClient, QueryClientProvider Hook) .. </h3></div>

      <br/><br/>
      <Child_react_query/>
      



      </QueryClientProvider>

    </div>
  )
}

export default React_query ; 