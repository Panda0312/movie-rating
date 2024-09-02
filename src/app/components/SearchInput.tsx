"use client";
import { Box, Collapse, Input } from "@chakra-ui/react";
import { SyntheticEvent, useCallback, useMemo, useRef, useState } from "react";
import lodash from "lodash";
import {
  updateSearchStr,
  selectFilteredMovies,
} from "@/lib/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import MovieListItem from "./MovieListItem";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();

  const filteredMovies = useAppSelector(selectFilteredMovies);

  const updateStoreSearch = useRef(
    lodash.debounce((v: string) => {
      dispatch(updateSearchStr(v));
    }, 300),
  );

  const changeHandler = (e: SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    updateStoreSearch.current(value);
  };

  const focusHandler = () => setIsOpen(true);
  const blurHandler = () =>
    setTimeout(() => {
      setIsOpen(false);
      setInputValue("");
      dispatch(updateSearchStr(""));
    }, 1000);

  const selectHandler = () => {
    setIsOpen(false);
    setInputValue("");
    dispatch(updateSearchStr(""));
  };

  return (
    <Box width={300} position={"relative"}>
      <Input
        value={inputValue}
        placeholder="Search movies"
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      <Collapse in={isOpen}>
        <Box
          data-testid="searchResult"
          position={"absolute"}
          right={0}
          minW={"100%"}
          mt="1"
          p={1}
          bg={"white"}
          rounded="md"
          shadow="md"
        >
          {filteredMovies.length
            ? filteredMovies.map((movie, idx) => (
                <Link
                  key={movie.id}
                  href={`/detail/${movie.id}`}
                  onClick={selectHandler}
                >
                  <div className="hover:bg-slate-400">
                    <MovieListItem
                      hideDivider={idx === filteredMovies.length - 1}
                      noDetail={true}
                      movie={movie}
                    />
                  </div>
                </Link>
              ))
            : "No result"}
        </Box>
      </Collapse>
    </Box>
  );
};
export default SearchInput;
