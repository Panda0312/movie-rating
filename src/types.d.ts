type TMovie = {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  rating: number;
  ratedNumber: number;
  thumbnail: string;
};

type TMovieState = {
  moviesList: TMovie[];
  userRate: Record<string, number>;
  userComments: Record<string, { text: string; time: number }[]>;
  searchStr?: string;
};
