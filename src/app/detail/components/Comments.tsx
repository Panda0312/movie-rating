"use client";
import {
  selectUserComments,
  updateUserComments,
} from "@/lib/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import moment from "moment";

const Comments = ({ id }: { id: string }) => {
  const [comment, setComment] = useState("");

  const dispatch = useAppDispatch();

  const comments = useAppSelector(selectUserComments)[id] || [];

  const addComment = () => {
    dispatch(updateUserComments({ id, comment }));
    setComment("");
  };

  return (
    <>
      <Heading mt={4}>Comments</Heading>
      <Divider mt={2} mb={2} borderColor={"#726d6d"}></Divider>
      <Textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <Box mt={2}>
        <Button onClick={() => setComment("")} mr={2}>
          Cancel
        </Button>
        <Button onClick={addComment}>Submit</Button>
      </Box>
      <List>
        {comments.map((comment) => (
          <ListItem
            key={comment.time}
            mt={4}
            mb={4}
            border={"1px solid #ccc"}
            p={4}
          >
            <Flex>
              <Box mr={4}>
                <Avatar />
              </Box>
              <Text lineHeight={2}>{comment.text}</Text>
            </Flex>
            <Box color={"#ccc"} fontSize={"small"} mt={2}>
              {moment(comment.time).format("YYYY-MM-DD HH:mm:ss")}
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default Comments;
