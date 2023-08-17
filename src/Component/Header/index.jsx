import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.png";
import { BsTelephone, BsChatLeftText } from "react-icons/bs";

export default function Header() {
  return (
    <Flex padding="8px" alignItems="center" justifyContent="space-between">
      <Box>
        <Image src={logo} />
      </Box>
      <Box>
        <Text fontSize="12px" fontWeight="700" color="rgba(0, 0, 0, 0.54)">
          Covid-19 Update:{" "}
          <Text
            as="span"
            fontSize="12px"
            fontWeight="500"
            color="rgba(0, 0, 0, 0.54)"
          >
            {" "}
            Our entire team is now working in-hospital. We expect no disruptions
            in our services.
          </Text>
        </Text>
      </Box>
      <Flex gap="30px">
        <Flex alignItems="center" gap="10px">
          <BsTelephone size="24px" />
          <Link
            fontSize="12px"
            fontWeight="500"
            color="rgba(0, 0, 0, 0.54)"
            href="tel: +91 931 531 4128"
          >
            +91 931 531 4128
          </Link>
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="10px">
          <BsChatLeftText size="24px" />
          <Link
            fontSize="12px"
            fontWeight="500"
            color="rgba(0, 0, 0, 0.54)"
            href="mailto:diagnose@123gmail.com"
          >
            diagnose@123gmail.com
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
