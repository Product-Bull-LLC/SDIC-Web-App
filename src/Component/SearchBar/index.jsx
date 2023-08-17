import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { RiUserSearchFill } from "react-icons/ri";

export default function SearchBar() {
  return (
    <Box>
      <InputGroup width="704px">
        <Input
          height="40px"
          type="tel"
          placeholder="search user by name..."
          fontSize="15px"
          fontWeight="500"
          color="#000000"
          borderRadius="10px"
        />
        <InputRightElement>
          <RiUserSearchFill size="24px" color="#0682D1" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
