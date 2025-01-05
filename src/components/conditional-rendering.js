import './css/style.css'
import './App.css';

function App() {

  return (
    <div class="App">
      <h1> <DrivingLicence /> </h1>
      <Get_Btn />
    </div>
  )
}



const DrivingLicence = () => {

  const age = 18

  if (age >= 18) {

    return (
      <div class="success">
        <h5>your age is ablove of 18 and can get Driving Licence </h5>
      </div>
    )

  }

  else return (
    <div class="warning">
      <h5> ur age is under rule and cant recive any Licence </h5>
    </div>
  )
}




const Get_Btn = () => {

  const age = 18

  return (
    <div>
      <button type="submit" class={age >= 18 ? "success" : "warning"}>

        {age >= 18 ? <h3>Lets Get it </h3> : <h3>leave site </h3> }
        
      </button>
    </div>
  )
}


export default App;
// tokyo hack them is good