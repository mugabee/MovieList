import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const MovieDescription = () => {
    const {id} = useParams<any>();
    const [movie,setMovie] = useState<any>();
    useEffect(()=>{
        const getAllMovies =async () =>{
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096&language=en-US`);
                console.log(response);
                setMovie(response.data);
            } catch (error) {
                console.log('error');
            }
        }
        getAllMovies();
    },[]);
       console.log(movie);
    return (
        <div className="md:flex w-full h-full bg-gray-200 p-8 justify-evenly items-center">
            {movie && (
                <>
                <img className=" rounded h-96" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div>
                    <h2>{movie.title}</h2>
                    <p>Overview: {movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Budget: {movie.budget}</p>
                    <p>Status: {movie.status}</p>
                    <p>vote_count: {movie.vote_count}</p>
                </div>
                </>
                )}
            {!movie && <h2>loading...</h2>}
        </div>
    )
}
export default MovieDescription;