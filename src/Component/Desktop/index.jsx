import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import bgimage from "../../assets/Desktop/bgimage.png";
import desktopimg from "../../assets/Desktop/desktopimg.png";

export default function Desktop() {
  return (
    <Box
      bgImage={bgimage}
      px="161px"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="calc(91dvh)"
    >
      <Flex justifyContent="space-between" alignItems="center" height="100%">
        <Box>
          <Image src={desktopimg} height="510px" />
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="30%"
          background="rgba(255, 255, 255, 0.25)"
          px="24px"
          height="100%"
          py="65px"
        >
          <Text
            fontSize="48px"
            fontWeight="400"
            fontFamily="moul"
            textAlign="center"
            color="white"
            letterSpacing="4.8px"
            textShadow="4px rgba(0, 0, 0, 0.25)"
          >
            TAKE CARE OF YOUR HEALTH NOW
          </Text>
          <Flex alignItems="center" justifyContent="center" mt="57px">
            <Link href="/signin">
              <Button
                background="#0682D1"
                border="none"
                px="57px"
                boxShadow="0px 20px 40px 0px rgba(12, 12, 12, 0.22)"
                py="10px"
                fontSize="16px"
                fontWeight="600"
                fontFamily="Poppins"
                color="white"
                borderRadius="4px"
              >
                Get Started
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
