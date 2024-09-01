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
  userFeedback: Record<
    string,
    {
      rating?: number;
      comment?: string;
    }
  >;
  searchStr?: string;
};
