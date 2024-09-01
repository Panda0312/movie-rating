"use client";
import { Badge, Box, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import Poster from "../components/Poster";
import { useAppSelector } from "@/lib/hooks";
import {
  selectMovies,
  selectUserRate,
} from "@/lib/features/movies/moviesSlice";
import { StarIcon } from "@chakra-ui/icons";
import Rating from "../components/Rating";
import Comments from "../components/Comments";

const MovieDetail = ({ params }) => {
  const { id } = params;

  const movie = useAppSelector(selectMovies).find((movie) => movie.id === id);
  const userRate = useAppSelector(selectUserRate)[id] || null;

  return movie ? (
    <main>
      <Flex>
        <Box mr={4}>
          <Poster imgSrc={movie.thumbnail} />
        </Box>
        <Flex direction={"column"} gap={6}>
          <Flex alignItems={"center"}>
            <Heading as={"h2"} size="lg" marginRight={4}>
              {movie.title}
            </Heading>
            <Box whiteSpace={"nowrap"} color={"GrayText"} fontSize={"x-large"}>
              ({movie.releaseDate})
            </Box>
          </Flex>
          <Box>
            <Badge>{movie.genre}</Badge>
          </Box>
          <Flex alignItems={"center"} gap={2}>
            <StarIcon color={"#f5c518"} mr={2} />
            {`${movie.rating}/10 `}
            <Tag ml={2} bg={"rgba(0,0,0,.2)"}>
              by {movie.ratedNumber}
            </Tag>
            <Rating movieId={id} userRate={userRate} />
          </Flex>
          <Text>
            A thief who steals corporate secrets through the use of
            dream-sharing technology is given the inverse task of planting an
            idea into the mind of a C.E.O., but his tragic past may doom the
            project and his team to disaster.
          </Text>
        </Flex>
      </Flex>
      <Comments id={id} />
    </main>
  ) : (
    <Box>Movie not found</Box>
  );
};
export default MovieDetail;
