import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { RiUserSearchFill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AppointmentList from "./AppointmentList";

export default function Home() {
  return (
    <Flex>
      <Box width="100%">
        <Box
          className="scroll"
          overflowX="scroll"
          height="calc(100dvh - 250px)"
          mt="65px"
        >
          <Flex gap="24px">
            <Box minWidth="75%">
              <Flex
                py="21px"
                px="28px"
                border="1px solid #000"
                background="rgba(217, 217, 217, 0.16)"
                borderRadius="10px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  opacity="0.6499999761581421"
                >
                  Health Forum Feedback
                </Text>
                <Flex gap="10px">
                  <Button
                    fontSize="15px"
                    fontWeight="600"
                    bgColor="#0682D1"
                    height="27px"
                    borderRadius="50px"
                    py="5px"
                    px="25px"
                    color="white"
                    _hover={{ bgColor: "rgba(6, 130, 209, 0.47)" }}
                  >
                    <Text opacity="0.6499999761581421"> January</Text>
                  </Button>
                  <Button
                    fontSize="15px"
                    fontWeight="600"
                    bgColor="#0682D1"
                    height="27px"
                    borderRadius="50px"
                    py="5px"
                    px="25px"
                    color="white"
                    _hover={{ bgColor: "rgba(6, 130, 209, 0.47)" }}
                  >
                    <Text opacity="0.6499999761581421">December</Text>
                  </Button>
                  <Button
                    fontSize="15px"
                    fontWeight="600"
                    bgColor="#0682D1"
                    height="27px"
                    borderRadius="50px"
                    py="5px"
                    px="25px"
                    color="white"
                    _hover={{ bgColor: "rgba(6, 130, 209, 0.47)" }}
                  >
                    <Text opacity="0.6499999761581421">November</Text>
                  </Button>
                </Flex>
              </Flex>
              <Box
                height="452px"
                width="100%"
                background="black"
                mt="43px"
              ></Box>
            </Box>
            <Flex
              flexDirection="column"
              alignItems="center"
              p="30px"
              bg="black"
              width="100%"
            >
              <Text
                fontSize="15px"
                fontWeight="600"
                opacity="0.6499999761581421"
                color="white"
                pb="36px"
              >
                All Appointments
              </Text>
              <IoIosCheckmarkCircle fill="#8EFF8B " size="44px" />
              <Box
                textAlign="center"
                width="100px"
                pb="10px"
                pt="25px"
                borderBottom="1px solid gray"
              >
                <Text pb="7px" fontSize="24px" fontWeight="700" color="#0682D1">
                  150
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  opacity="0.6499999761581421"
                  color="white"
                >
                  Total Appointment
                </Text>
              </Box>
              <Box
                textAlign="center"
                width="100px"
                pb="10px"
                pt="25px"
                borderBottom="1px solid gray"
              >
                <Text pb="7px" fontSize="24px" fontWeight="700" color="#0682D1">
                  1480
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  opacity="0.6499999761581421"
                  color="white"
                >
                  Completed Appointment
                </Text>
              </Box>
              <Box
                textAlign="center"
                width="100px"
                pb="10px"
                pt="25px"
                borderBottom="1px solid gray"
              >
                <Text pb="7px" fontSize="24px" fontWeight="700" color="#0682D1">
                  118
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  opacity="0.6499999761581421"
                  color="white"
                >
                  Cancelled Appointment
                </Text>
              </Box>
              <Box mt="34px" width="100%">
                <Slider aria-label="slider-ex-1" defaultValue={30}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>
          </Flex>
          <Box>
            <AppointmentList />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
