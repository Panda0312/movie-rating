"use client";
import {
  Box,
  Fade,
  Image,
  Modal,
  ModalBody,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";

const Poster = ({ imgSrc }: { imgSrc: string }) => {
  const [openPoster, setOpenPoster] = useState(false);
  const { onClose } = useDisclosure();
  const closePoster = () => {
    setOpenPoster(false);
    onClose();
  };

  return (
    <Box position={"relative"}>
      <Image
        data-testid="posterImg"
        src={imgSrc}
        width={240}
        onClick={() => setOpenPoster(true)}
      />
      <Modal isCentered={true} isOpen={openPoster} onClose={onClose}>
        <ModalBody
          pos={"fixed"}
          top={0}
          w={"100vw"}
          h={"100vh"}
          bg={"rgba(222, 222, 222, 0.5)"}
          onClick={closePoster}
        >
          <Fade in={openPoster}>
            <Wrap
              position={"fixed"}
              left={"50%"}
              top={"50%"}
              transform={"translate(-50%,-50%)"}
            >
              <Image data-testid="largeImg" src={imgSrc} width={500} />
            </Wrap>
          </Fade>
        </ModalBody>
      </Modal>
    </Box>
  );
};
export default Poster;
