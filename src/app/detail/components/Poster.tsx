"use client";
import {
  AlertDialog,
  AlertDialogBody,
  Box,
  Button,
  Fade,
  Image,
  Modal,
  ModalBody,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";

const Poster = ({ imgSrc }: { imgSrc: string }) => {
  const [openPoster, setOpenPoster] = useState(false);

  return (
    <Box position={"relative"}>
      <Image src={imgSrc} width={240} onClick={() => setOpenPoster(true)} />
      <Modal
        isCentered={true}
        isOpen={openPoster}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <ModalBody
          pos={"fixed"}
          top={0}
          w={"100vw"}
          h={"100vh"}
          bg={"rgba(222, 222, 222, 0.5)"}
          onClick={() => setOpenPoster(false)}
        >
          <Fade in={openPoster}>
            <Wrap
              position={"fixed"}
              left={"50%"}
              top={"50%"}
              transform={"translate(-50%,-50%)"}
            >
              <Image src={imgSrc} width={500} />
            </Wrap>
          </Fade>
        </ModalBody>
      </Modal>
    </Box>
  );
};
export default Poster;
