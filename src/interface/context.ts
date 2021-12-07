// export interface IMovie{
//     id: number;
//     name: string;
//     img: string;
//   }
  
  export type MoviesContextState = {
    movies: any[];
    addmovie: (item: any) => void;
    addFevorite: (id: number) => void;
    likeMovie: () => void;
  };