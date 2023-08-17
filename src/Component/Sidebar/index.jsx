import { Avatar, Box, Flex, Link, Text, WrapItem } from "@chakra-ui/react";
import { MdPlaylistPlay } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box
      width="296px"
      h="500px"
      borderRadius="20px 20px 0px 0px"
      backgroundImage="linear-gradient(180deg, rgba(6, 130, 209, 0.14) 0%, rgba(6, 130, 209, 0.12) 13.54%, rgba(6, 130, 209, 0.00) 100%)"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box mt="68px">
          <WrapItem>
            <Avatar
              width="116px"
              height="116px"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </WrapItem>
        </Box>
        <Box textAlign="center" mt="11px" px="30px" width="100%">
          <Text
            fontSize="15px"
            fontWeight="500"
            color="#0682D1"
            opacity="0.6499999761581421"
          >
            Supreme
          </Text>
          <Text
            fontSize="15px"
            fontWeight="500"
            color="#0682D1"
            opacity="0.6499999761581421"
          >
            Diagnostic & Imagine Center{" "}
          </Text>
          <Text fontSize="15px" fontWeight="500" opacity="0.6499999761581421">
            Admin Name
          </Text>
          <Link
            href="#"
            fontSize="15px"
            fontWeight="500"
            color="#0682D1"
            opacity="0.6499999761581421"
          >
            @Admin Email Id
          </Link>
        </Box>
        <Box px="15px" mt="45px">
          <RouterLink to="/home">
            <Flex
              gap="30px"
              py="15px"
              borderTop="1px solid rgba(0, 0, 0, 0.56)"
              borderBottom="1px solid rgba(0, 0, 0, 0.56)"
            >
              <Flex
                border="4px solid black"
                textAlign="center"
                width="24px"
                height="24px"
                borderRadius="20px"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="14px" fontWeight="700">
                  8
                </Text>
              </Flex>

              <Text fontSize="15px" fontWeight="500">
                insights
              </Text>
            </Flex>
          </RouterLink>
          <RouterLink to="/book-appointment">
            <Flex
              gap="30px"
              py="15px"
              borderBottom="1px solid rgba(0, 0, 0, 0.56)"
            >
              <MdPlaylistPlay size="24px" />
              <Text fontSize="15px" fontWeight="500">
                Appointment List
              </Text>
            </Flex>
          </RouterLink>
          <RouterLink to="/">
            <Flex
              gap="30px"
              py="15px"
              borderBottom="1px solid rgba(0, 0, 0, 0.56)"
            >
              <TbLogout size="24px" color="#F6617B" />
              <Text fontSize="15px" fontWeight="500">
                Logout
              </Text>
            </Flex>
          </RouterLink>
        </Box>
      </Flex>
    </Box>
  );
}
