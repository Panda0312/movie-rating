"use client";
import { updateUserRate } from "@/lib/features/movies/moviesSlice";
import { useAppDispatch } from "@/lib/hooks";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Collapse, Wrap, WrapItem } from "@chakra-ui/react";
import { useMemo, useState } from "react";

const Rating = ({
  userRate,
  movieId,
}: {
  userRate: number | null;
  movieId: string;
}) => {
  const [openRate, setOpenRate] = useState(false);
  const [overItem, setOverItem] = useState(-1);

  const dispatch = useAppDispatch();

  const rateHandler = (item: number) => {
    setOpenRate(false);
    dispatch(updateUserRate({ id: movieId, rating: item }));
  };

  const buttonText = useMemo(() => {
    if (openRate) {
      return overItem > 0 ? overItem : "Rate";
    } else {
      return userRate || "Rate";
    }
  }, [overItem, openRate, userRate]);

  return (
    <Box pos={"relative"}>
      <Button
        size={"sm"}
        borderRadius={10}
        color={"#284de2"}
        onClick={() => setOpenRate((prev) => !prev)}
      >
        <StarIcon
          color={userRate ? "#f5c518" : "white"}
          stroke={"#f5c518"}
          mr={1}
        />
        {buttonText}
      </Button>
      <Collapse in={openRate}>
        <Wrap
          gap={2}
          pos={"absolute"}
          top={"120%"}
          transform={"translateX(-30%)"}
          width={250}
          onMouseLeave={() => setOverItem(-1)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <WrapItem
              key={item}
              cursor={"pointer"}
              onMouseOver={() => setOverItem(item)}
              onClick={() => rateHandler(item)}
            >
              <StarIcon
                color={item <= overItem ? "#f5c518" : "white"}
                stroke={"#f5c518"}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Collapse>
    </Box>
  );
};
export default Rating;
