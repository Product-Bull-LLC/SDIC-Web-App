import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RiUserSearchFill } from "react-icons/ri";
import { HiEye } from "react-icons/hi";
import AppointmentForm from "./AppointmentForm";
import { AiFillRightCircle } from "react-icons/ai";

const UserAppointmentList = [
  {
    image: "https://bit.ly/prosper-baba",
    date: "2 june",
    name: "james",
    status: "pending",
    icon: "",
    button: "view detail",
  },
  {
    image: "https://bit.ly/prosper-baba",
    date: "2 june",
    name: "james",
    status: "pending",
    icon: "",
    button: "view detail",
  },
  {
    image: "https://bit.ly/prosper-baba",
    date: "2 june",
    name: "james",
    status: "pending",
    icon: "",
    button: "view detail",
  },
];

export default function BookAppointment() {
  const navigate = useNavigate();
  return (
    <Box
      className="scroll"
      overflowX="scroll"
      height="calc(100dvh - 250px)"
      mt="65px"
    >
      <Flex gap="32px">
        <Box width="100%">
          <Box padding="30px" background="rgba(6, 130, 209, 0.04)" width="100%">
            <Flex gap="60px" alignItems="center">
              <Box
                width="376px"
                height="340px"
                boxShadow="0px 20px 40px 0px rgba(12, 12, 12, 0.22)"
                background="white"
              ></Box>
              <Box
                width="151px"
                height="160px"
                background="white"
                padding="25px"
                textAlign="center"
              >
                <Text fontSize="24px" fontWeight="700" color="#0682D1">
                  150
                </Text>
                <Text fontSize="14px" fontWeight="500">
                  Total Appointment June 21 ,2023
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box mt="40px">
            <Flex justifyContent="space-between">
              <Text
                fontSize="15px"
                opacity="0.6499999761581421"
                fontWeight="500"
              >
                User Appointment List
              </Text>
              <InputGroup width="241px">
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
            </Flex>
            <Flex
              mt="10px"
              flexDirection="column"
              gap="40px"
              py="30px"
              px="50px"
              border="0.5px solid rgba(0, 0, 0, 0.24)"
              borderRadius="10px"
            >
              {UserAppointmentList.map((item) => {
                return (
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" gap="30px">
                      <Box width="40px">
                        <Text
                          fontSize="16px"
                          textAlign="center"
                          fontWeight="500"
                        >
                          {item.date}
                        </Text>
                      </Box>
                      <Box
                        width="5px"
                        height="5px"
                        borderRadius="5px"
                        background="#FF6800"
                      ></Box>
                      <Flex alignItems="center" gap="10px">
                        <WrapItem>
                          <Avatar
                            width="55px"
                            height="55px"
                            name="Prosper Otemuyiwa"
                            src={item.image}
                          />{" "}
                        </WrapItem>
                        <Box>
                          <Text fontSize="16px" fontWeight="500">
                            {item.name}
                          </Text>
                          <Text
                            fontSize="16px"
                            color="#FF6800"
                            fontWeight="500"
                          >
                            status : {item.status}
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                    <Box>
                      <Button
                        fontSize="16px"
                        fontWeight="600"
                        color="#0682D1"
                        px="15px"
                        height="35px"
                        background="white"
                        borderRadius="10px"
                        boxShadow="0px 20px 40px 0px rgba(12, 12, 12, 0.11)"
                        gap="5px"
                        onClick={() => navigate("/patient-detail/asd-dsf-f")}
                      >
                        <HiEye />
                        <Text>{item.button}</Text>
                      </Button>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
            <Flex
              alignItems="center"
              fontSize="20px"
              mt="26px"
              fontWeight="400"
              color="gray"
              gap="5px"
              justifyContent="end"
            >
              <Text>View All</Text>
              <AiFillRightCircle width="20px" height="20px" fill="#80B9FC" />
            </Flex>
          </Box>
        </Box>
        <AppointmentForm />
      </Flex>
    </Box>
  );
}
