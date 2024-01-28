import React from "react";
import MovieData from "../MovieData";
const MovieList = ({setmoviename}) =>{
    // const [moviename,setmoviename] = useState("") 
    // console.log(moviename)
return(
    <div>
         {
            MovieData.map((item) =>{
             return(
                <div className="movietitle">
                    <p onClick={()=>setmoviename(item)}>{item.title}</p>
                </div>
             )
            })
            }
    </div>


    //Method 2 - using props calling moviedisplay,But every time movie display is called. To over come this
    //we call both at common point.
    // <div>
         
    //         {
    //         MovieData.map((item) =>{
    //          return(
    //             <div className="movietitle">
    //                 <p onClick={()=>setmoviename(item)}>{item.title}</p>
    //             </div>
    //          )
    //         })
    //         }
    //       <MovieDisplay  moviename={moviename}/>
    // </div>
)
}

export default MovieList;