import { Box, Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative z-10">
      <Flex justifyContent={"space-between"} alignItems={"center"} p={4}>
        <Box>
          <Link href={"/"}>
            <Image
              data-testid="logo"
              w={50}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvwVAC3F5xurW6mtfMrEoeWvuQpisg17tNg&s"
              }
            />
          </Link>
        </Box>
        <Box>
          <SearchInput />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
