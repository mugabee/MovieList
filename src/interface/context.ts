// export interface IMovie{
//     id: number;
//     name: string;
//     img: string;
//   }
  
  export type MoviesContextState = {
    movies: any[];
    watchList:any[];
    addmovie: (item: any) => void;
    addToList:(item:any) => void;
    removeFromWatchList:(id:number) => void;
    addFevorite: (id: number) => void;
    likeMovie: () => void;
    getMoviesByGenre:(id:string) => void
  };