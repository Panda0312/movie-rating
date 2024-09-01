import { Box, Button, Center } from "@chakra-ui/react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }: { movies: TMovie[] }) => {
  const loadMore = () => {
    console.log("load more");
  };

  return (
    <>
      <Box m={0} pl={4} pr={4} pt={2}>
        {movies.map((movie, idx) => (
          <Box key={movie.title}>
            <MovieListItem movie={movie} />
          </Box>
        ))}
      </Box>
      {!movies.length && <Box>No result</Box>}
      <Center>
        <Button onClick={loadMore}>more</Button>
      </Center>
    </>
  );
};

export default MovieList;
