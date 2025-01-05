import './css/style.css'
import './App.css';

function App() {
  return (
    <div class="App">

      <LessonComponent />
    </div>
  )
}






// school course List component 

// const School = () => {

//   const courses = ["math", "chimy", "sport", "physic"]

//   return (
//    <div class="App">

//       {courses.map((item,index)=>{
//         return <h1 key={index} >{item}</h1>
//        })}

//   </div>
//       )

// }








// List object component  Mapping

// const LessonComponent = () => {

//   const lessons = [
//     { name: "html", status: true },
//     { name: "css", status: true },
//     { name: "js", status: true },
//     { name: "python", status: false },
//     { name: "sql", status: false },
//   ]

//   return (
//     <div>

//       {lessons.map((item, index) => {
//         return <h1 key={index} >{index += 1} - {item.name}</h1>
//       })}

//     </div>
//   )

// }









// filter object component  Mapping

const LessonComponent = () => {

  const lessons = [
    { name: "html", status: true },
    { name: "css", status: true },
    { name: "js", status: true },
    { name: "python", status: false },
    { name: "sql", status: false },
  ]

  return (
    <div>

      {lessons.map((item,index)=>{
        return item.status && <h1 key={index} >{index += 1 } - {item.name}</h1>
      })}

    </div>
  )

}





export default App;

