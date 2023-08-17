import { Box, Flex } from "@chakra-ui/react";
import Header from "../Component/Header";
import Home from "../Component/Home";
import AppointmentList from "../Component/Home/AppointmentList";
import Sidebar from "../Component/Sidebar";
import SearchBar from "../Component/SearchBar";
import PatientDetail from "../Component/PatientDetail";

function PatientDetailPage() {
  return (
    <>
      <Header />
      <Flex py="34px">
        <Box>
          <Sidebar />
        </Box>
        <Box width="100%" pl="80px" pr="31px">
          <SearchBar />
          <PatientDetail />
        </Box>
      </Flex>
    </>
  );
}

export default PatientDetailPage;
