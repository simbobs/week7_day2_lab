import React, {useState} from 'react';
import Movie from './Movie';


const MovieList = ({movies}) => {
  
    const movieNodes = movies.map((movie)=>{
        return(
        <Movie movie={movie} key = {movie.id}/>

        )

        
    });



    return(
        <>

        {movieNodes}

        </>

    )
}

export default MovieList;