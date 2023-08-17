import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import clickimg from "../../assets/SignIn/clickimg.png";
// import AiOutlineEye from "react-icons/ai";

export default function SignIn() {
  return (
    <Box px="75px" pt="12px">
      <Flex alignItems="center" justifyContent="space-between" height="100%">
        <Box width="50%" px="30px">
          <Image src={clickimg} alt="clickimg" height="570px" />
        </Box>
        <Box width="50%">
          <Box>
            <Link
              borderBottom="2px solid #0682D1"
              fontSize="16px"
              fontWeight="500"
              href="#"
              color="black"
              textDecoration="none"
            >
              Login
            </Link>
          </Box>
          <Box pt="70px">
            <Text fontSize="16px" fontWeight="500" margin="0">
              Welcome back
            </Text>
            <Text fontSize="45px" fontWeight="500" margin="0">
              Login
            </Text>
            <Box>
              <InputGroup mt="24px">
                <Input
                  height="52px"
                  width="100%"
                  type="tel"
                  fontSize="16px"
                  placeholder="Mobile Number"
                  border="1px solid #0000001f"
                  borderRadius="12px"
                  px="18px"
                />
                <InputLeftElement pointerEvents="none">
                  {/* <AiFillMobile color="gray.300" /> */}
                </InputLeftElement>
              </InputGroup>
              <InputGroup mt="50px">
                <Input
                  height="52px"
                  width="100%"
                  type="password"
                  fontSize="16px"
                  placeholder="Passward"
                  border="1px solid #0000001f"
                  borderRadius="12px"
                  px="18px"
                />
                <InputLeftElement pointerEvents="none">
                  {/* <AiOutlineEye color="gray.300" /> */}
                </InputLeftElement>
              </InputGroup>
              <Text mt="12px" textAlign="end" fontSize="14px" fontWeight="400">
                Forget password?
              </Text>
            </Box>
          </Box>
          <Box mt="46px">
            <Link href="/home">
              <Button
                width="100%"
                height="52px"
                borderRadius="4px"
                boxShadow="0px 20px 40px 0px rgba(12, 12, 12, 0.22)"
                border="none"
                background="white"
                fontSize="20px"
                fontWeight="600"
                fontFamily="Poppins"
                _hover={{
                  background: "#099fff33",
                  border: "1px solid #0682D1",
                  color: "#0682D1",
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
