import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  WrapItem,
} from "@chakra-ui/react";

export default function AppointmentList() {
  return (
    <Box
      background="linear-gradient(180deg, #0682D1 0%, #80B9FC 6.41%, #0682D1 100%)"
      py="20px"
      px="50px"
      mt="33px"
      borderRadius="20px"
    >
      <Text fontSize="15px" fontWeight="600" color="white">
        Appointment List
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="15px">
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                james
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 7th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                yusuf
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 8th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                rehma
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 8th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                aames
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 9th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                jattes
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 9th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap="10px" alignItems="center">
            <Box>
              <WrapItem>
                <Avatar
                  width="55px"
                  height="55px"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </WrapItem>
            </Box>
            <Box textAlign="center">
              <Text fontSize="16px" fontWeight="500" color="white">
                jessfh
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="rgba(245, 245, 245, 0.68)"
              >
                Booked on 8th july
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
