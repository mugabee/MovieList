import React, {createContext, useEffect, useState} from "react";
import { MoviesContextState } from '../src/interface/context'
// import { IMovie } from "./interface/context";
import axios from 'axios'


const contextDefaultValue:MoviesContextState = {
    movies:[],
    addmovie:()=>{},
    addFevorite:()=>{},
    likeMovie:()=>{}

}; 

export const MoviesContext = createContext<MoviesContextState>(contextDefaultValue);


type movieContextProviderProps = {
    children:React.ReactNode
}

const MoviesProvider = ({children}:movieContextProviderProps) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movies, setmovies] = useState<any[]>(contextDefaultValue.movies);
    const addmovie = (newmovie:any) => setmovies((movies)=>[...movies,newmovie]);
    const addFevorite = async (id:number) => {
        setmovies(movies.filter((movie) => movie.id !== id));
        console.log(movies);
      };
    const likeMovie = () =>{

    }
    useEffect(() => {
        try {
            const fetchdata = async ( ) => {
            const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096")
            console.log(response)
            setmovies(response.data)
        }
        fetchdata();
    
            
        } catch (error) {
            console.log(error);
        }
           
    }, [])

    const value ={
        movies,
        setmovies,
        addmovie,
        likeMovie,

        addFevorite,

    }
    return (
        <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
    )
}
export default MoviesProvider;
     