import React,{useState} from "react";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";
const App = () =>{
  const [moviename,setmoviename] = useState("") 
return(
  <div>
    <MovieList setmoviename={setmoviename}/>
   <MovieDisplay moviename={moviename}/>
  </div>
)

 //METHOD 1 - Writing every thing in App.js
    // const [moviename,setmoviename] = useState("")
 
    // return(
    //     <div>
    //       <div className="movietitle">
    //         {
    //         movie.map((item) =>{
    //          return(
    //             <div>
    //                 <p onClick={()=>setmoviename(item)}>{item.title}</p>
    //             </div>
    //          )
    //         })
    //         }
    //       </div> 
    //       moviename!="" && (<div className="moviedetails">
    //         <h3>{moviename.title}</h3>
    //         <h3>{moviename.year}</h3>
    //         <h3>{moviename.genre}</h3>
    //         <h3>{moviename.director}</h3>
    //         <h3>{moviename.cast}</h3>
    //       </div>)
    //     </div>
    // )
}
export default App;