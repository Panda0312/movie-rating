import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Tag,
} from "@chakra-ui/react";
import Link from "next/link";

const MovieListItem = ({
  movie,
  noDetail,
  hideDivider,
}: {
  movie: TMovie;
  noDetail?: boolean;
  hideDivider?: boolean;
}) => {
  return (
    <Box mb={2} pt={2}>
      <Flex>
        <Box marginRight={6} w={"100px"} flexShrink={0}>
          <Image src={movie.thumbnail} width={100} alt="unknown" />
        </Box>
        <Flex direction={"column"} justifyContent={"space-around"}>
          <Flex>
            <Heading as={"h2"} size="md" marginRight={4}>
              {movie.title}
            </Heading>
            <Box whiteSpace={"nowrap"}>({movie.releaseDate})</Box>
          </Flex>
          <Box>
            <Badge>{movie.genre}</Badge>
          </Box>
          <Flex alignItems={"center"}>
            <StarIcon color={"#f5c518"} mr={2} />
            {`${movie.rating}/10 `}
            <Tag ml={2} bg={"rgba(0,0,0,.2)"}>
              by {movie.ratedNumber}
            </Tag>
          </Flex>
          {!noDetail && (
            <Box>
              <Link className="underline text-xl" href={`./detail/${movie.id}`}>
                View Details
              </Link>
            </Box>
          )}
        </Flex>
      </Flex>
      {!hideDivider && (
        <Divider
          borderColor={"rgba(0,0,0,.3)"}
          borderWidth={1}
          borderRight={0}
          borderLeft={0}
          marginTop={4}
        />
      )}
    </Box>
  );
};
export default MovieListItem;
