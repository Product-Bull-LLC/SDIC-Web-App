import { Box, Flex } from "@chakra-ui/react";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import BookAppointment from "../Component/BookAppointment";
import SearchBar from "../Component/SearchBar";

export default function Appointment() {
  return (
    <>
      <Header />
      <Flex py="34px">
        <Box>
          <Sidebar />
        </Box>
        <Box width="100%" pl="80px" pr="31px">
          <SearchBar />
          <BookAppointment />
        </Box>
      </Flex>
    </>
  );
}
