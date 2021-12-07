import React, {useContext} from "react"
import MoviesProvider from "../movieContext"
import { MoviesContext } from "../movieContext";

interface IMovie = {
    original_title;
}

const MovieList = () => {
    const{ movies } = useContext(MoviesContext);

    return (
        <div>
            {movies.length !==0 && movies ?(
                // movies.production_companies.map( movie => ( 
                <div> 
                        <h3>{movies.original_title}</h3>
                    </div>

                ) 
                // )
            ) : (
                <h2>LOading</h2>
                )}
            
        </div>
    )
}

export default MovieList
