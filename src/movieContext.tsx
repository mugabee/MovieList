import React, {createContext, useEffect, useState} from "react";
import { MoviesContextState } from '../src/interface/context'
// import { IMovie } from "./interface/context";
import axios from 'axios'


const contextDefaultValue:MoviesContextState = {
    movies:[],
    watchList:[],
    addmovie:()=>{},
    addToList:()=>{},
    removeFromWatchList:()=>{},
    getMoviesByGenre:()=>{},
    addFevorite:()=>{},
    likeMovie:()=>{},
    searchMovie:() => {}


}; 

export const MoviesContext = createContext<MoviesContextState>(contextDefaultValue);


type movieContextProviderProps = {
    children:React.ReactNode
}

const MoviesProvider = ({children}:movieContextProviderProps) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState<any[]>([]);
    const [movies, setmovies] = useState<any[]>(contextDefaultValue.movies);
    const [kidsMovies, setKidsMovies] = useState<any[]>([]);
    const [watchList,setWatchlist] = useState<any[]>([]);
    const addmovie = (newmovie:any) => setmovies((movies)=>[...movies,newmovie]);
    const addFevorite = async (id:number) => {
        setmovies(movies.filter((movie) => movie.id !== id));
        console.log(movies);
      };
    const likeMovie = () =>{

    }

    const addToList = (movie:any) =>{
            setWatchlist([...watchList,movie])
    }
    const searchMovie = (searchText:string) =>{
        
    }

    const removeFromWatchList = (id:number) =>{
        setWatchlist(watchList.filter((movie)=> movie.id !== id))
    }

    const getMoviesByGenre =  async (id:string) => {
        try {

            console.log(id);
            const KidsMoviesData = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096&with_genres=${id}`)
            console.log("kids",KidsMoviesData.data);
            setmovies(KidsMoviesData.data.results);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const getMovies = async () =>{
            try {
                const moviesData = await  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096')
                console.log(moviesData.data);
                setmovies(moviesData.data.results);
            } catch (error) {
                console.log(error)
            }
            
        }
        getMovies()
    },[])
    useEffect(()=>{
        const getKidsMovies =  async () => {
            try {
                const KidsMoviesData = await axios.get('https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096')
                console.log("kids",KidsMoviesData.data);
                setKidsMovies(KidsMoviesData.data.results);
                
            } catch (error) {
                console.log(error)
            }
        }

        getKidsMovies();
    },[])

    const value ={
        movies,
        watchList,
        setmovies,
        addmovie,
        removeFromWatchList,
        getMoviesByGenre,
        likeMovie,
        addToList,
        addFevorite,
        kidsMovies,
        text, 
        setText,
        searchMovie,

    }
    return (
        <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
    )
}
export default MoviesProvider;
     