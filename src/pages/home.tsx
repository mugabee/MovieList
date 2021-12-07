import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import IPageProps from '../interface/page';
import { MoviesContext } from '../movieContext';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    const[id,setId] = useState<string>('');
    const [genres,setGenres] = useState<any[]>();

    const { movies,addToList,watchList,getMoviesByGenre} = useContext(MoviesContext);

    console.log('movies',movies)


    const handleAddToList = (movie:any) =>{
        addToList(movie);
    }

    console.log(watchList)

    useEffect(()=>{
        const getKidsMovies =  async () => {
            try {
                const KidsMoviesData = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096&language=en-US')
                console.log("genres",KidsMoviesData.data);
                setGenres(KidsMoviesData.data.genres);
                
            } catch (error) {
                console.log(error)
            }
        }

        getKidsMovies();
    },[])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setId('28')
         getMoviesByGenre(id);
    }
    
   

    return (
        <div className=" h-full bg-gray-200">
            <div>
                
                <div>
                    {genres && 
                     <select name="genre"  onChange={()=>handleChange}>
                     <option>select movies type</option>
                     {
                         genres.map((genre)=>(
                             <option value={genre.id}>{genre.name}</option>
                         ))
                     }
                     <option>kids movies</option>
                 </select>
                    }
                    
                    <p>
                        Welcome to this page Home pAGE<br />
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        User: {auth.currentUser?.displayName}<br />
                        Click <Link to="/logout">here</Link> to logout.
                    </p>
                    <p><Link to="/fevorite">view fevorite</Link></p>
                    <p><Link to="/watchlist">view watchlist</Link></p>
                </div>
            </div>
         <div>
             {movies && (
                 
                    movies.map((movie:any)=>(
                        <>
                        <Link to={`/movies/${movie.id}`}>
                         <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                         <h3>{movie.title}</h3>
                         <button onClick={()=>handleAddToList(movie)}>add to watchList</button>
                         <button>add to favorites</button>
                         </Link>
                         </>
                     ))
                 
             )}
         </div>
        </div>
    );
}

export default HomePage;