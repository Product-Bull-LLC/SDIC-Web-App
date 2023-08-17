import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
import { BiSolidReport } from "react-icons/bi";

const inputtitle = [
  {
    title: "Patient Name",
    placeholder: "John Doe",
  },
  {
    title: "Test",
    placeholder: "XXXXXXXXXX",
  },
  {
    title: "appointment date",
    placeholder: "John Doe",
  },
  {
    title: "Mobile Number",
    placeholder: "John Doe",
    type: "number",
  },
];
export default function AppointmentForm() {
  return (
    <>
      <Box
        px="50px"
        py="30px"
        backgroundImage="linear-gradient(180deg, #D1ECFF 0%, #FFF 0.67%, #FFF 4.34%, #FFF 100%)"
        borderRadius="20px"
        border="1px dashed rgba(0, 0, 0, 0.10)"
        minWidth="33%"
      >
        <Flex alignItems="center" gap="20px">
          <WrapItem>
            <Avatar
              width="116px"
              height="116px"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </WrapItem>
          <Box textAlign="center">
            <Text fontSize="15px" fontWeight="600" opacity="0.6499999761581421">
              General User
            </Text>
            <Text fontSize="15px" fontWeight="600" opacity="0.6499999761581421">
              @email id
            </Text>
          </Box>
        </Flex>
        <Box mt="30px">
          {inputtitle.map((AddItems) => {
            return (
              <Box mt="30px">
                <Text fontSize="16px" px="10px" mb="7px" fontWeight="300">
                  {AddItems.title}
                </Text>
                <Input
                  borderRadius="15px"
                  type={AddItems.type}
                  border="1px solid rgba(12, 12, 12, 0.16)"
                  placeholder={AddItems.placeholder}
                />
              </Box>
            );
          })}
        </Box>
        <Box mt="30px">
          <Text fontSize="16px" px="10px" mb="7px" fontWeight="300">
            comments
          </Text>
          <Textarea
            height="126px"
            borderRadius="15px"
            border="1px solid rgba(12, 12, 12, 0.16)"
            placeholder="XXXXXXXXXX"
          />
        </Box>
        <Flex
          py="20px"
          px="15px"
          background="#D7F0FE"
          alignItems="center"
          borderRadius="15px"
          gap="30px"
          mt="12px"
        >
          <Box
            bg="#0682D1"
            alignItems="center"
            display="flex"
            justifyContent="center"
            borderRadius="50px"
            width="45px"
            height="45px"
          >
            <BiSolidReport size={24} color="white" />
          </Box>
          <Button
            py="6px"
            px="28px"
            height="35px"
            color="#0682D1"
            boxShadow="0px 20px 40px 0px rgba(12, 12, 12, 0.11)"
            bgColor="white"
          >
            Add Report
          </Button>
        </Flex>
      </Box>
    </>
  );
}
