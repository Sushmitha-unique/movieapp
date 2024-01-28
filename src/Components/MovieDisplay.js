import React from "react";


const MovieDisplay = ({moviename}) => {
    return(
<div className="moviedetails">
            <h3>{moviename.title}</h3>
            <p>{moviename.year}</p>
            <p>{moviename.genre}</p>
            <p>{moviename.director}</p>
            <p>{moviename.cast}</p>
</div>
    )
}
export default MovieDisplay;