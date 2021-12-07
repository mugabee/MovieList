import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import IPageProps from "../interface/page";
import { MoviesContext } from "../movieContext";

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
  const [id, setId] = useState<string>("");
  const [genres, setGenres] = useState<any[]>();

  const { movies, addToList, watchList, getMoviesByGenre, searchMovie } =
    useContext(MoviesContext);

  console.log("movies", movies);

  const handleAddToList = (movie: any) => {
    addToList(movie);
  };
  const [dropMenu, setDropMenu] = useState(false);
  const showMenu = () => {
    setDropMenu(!dropMenu);
  };

  console.log(watchList);

  useEffect(() => {
    const getKidsMovies = async () => {
      try {
        const KidsMoviesData = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=6bd132a8b1b6e1b896ba0fb1ae7a2096&language=en-US"
        );
        console.log("genres", KidsMoviesData.data);
        setGenres(KidsMoviesData.data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getKidsMovies();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId("28");
    getMoviesByGenre(id);
  };

  return (
    <div className=" h-full bg-gray-200">
      <div>

        
      <nav
        className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span className="font-semibold text-xl tracking-tight">My Navbar</span>
            </div>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>

        <div className="relative mx-auto text-gray-600 lg:block hidden">
                <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-48 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search"/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966" 
                       
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
            </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Menu 1
                </a>
                <a href="#responsive-header"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Menu 2
                </a>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Menu 3
                </a>
            </div>
            <div>
            {genres && (
            <select name="genre" onChange={() => handleChange}>
              <option>select movies type</option>
              {genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
              <option>kids movies</option>
            </select>
          )}
            </div>
            <div>
            <span onClick={showMenu}>{auth.currentUser?.displayName}</span>
            <div
              className={`${
                dropMenu ? "" : "hidden"
              }  absolute w-full  rounded-b border-t-0 z-10`}
            >
                <div>
                <button><Link to="/change">Change Password</Link> </button>
                    <button><Link to="/logout">Logut</Link> </button>
                </div>
                </div>
                
            </div>
            

           
            
            <div className="flex ">
                <a href="#"
                   className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                    in</a>
    
                <a href="#"
                   className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">login</a>
            </div>
        </div>
    
    </nav>
      

        <div>
          {genres && (
            <select name="genre" onChange={() => handleChange}>
              <option>select movies type</option>
              {genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
              <option>kids movies</option>
            </select>
          )}

          <p>
            Welcome to this page Home pAGE
            <br />
            Change your password <Link to="/change">here</Link>.
          </p>
          <p>
            User: {auth.currentUser?.displayName}
            <br />
            Click <Link to="/logout">here</Link> to logout.
          </p>
          <p>
            <Link to="/fevorite">view fevorite</Link>
          </p>
          <p>
            <Link to="/watchlist">view watchlist</Link>
          </p>
        </div>
      </div>
      <div>
        {movies &&
          movies.map((movie: any) => (
            <>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <button onClick={() => handleAddToList(movie)}>
                  add to watchList
                </button>
                <button>add to favorites</button>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
