import { useContext } from "react";
import { MoviesContext } from "../movieContext";

const WatchList = () => {
    const {watchList,removeFromWatchList} = useContext(MoviesContext);



    return (
        <div>
             {watchList && (
                 
                 watchList.map((movie:any)=>(
                     <>
                      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                      <h3>{movie.title}</h3>
                     <button onClick={()=>removeFromWatchList(movie.id)}>remove from watchList</button>
                      <button>add to favorites</button>
                      </>
                  ))
              
          )}
        </div>
    )
}

export default WatchList;
