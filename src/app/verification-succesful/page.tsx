"use client";

import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";

export default function VerificationSuccesful() {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Heading
        fontSize={{ base: "16px", md: "32px" }}
        fontWeight="500"
        color="#1E1E1E"
        mb="1rem"
      >
        Verification Successful
      </Heading>
      <Image
        width={{ base: "100px", md: "200px" }}
        src="../imgs/verification-succesful.svg"
        mb="1rem"
      />
      <Text
        fontSize={{ base: "16px", md: "20px" }}
        fontWeight="400"
        color="#333333"
        mb="1rem"
      >
        You’ve successfully transferred $100 to Victoryroberts
      </Text>
      <Button
        height="55px"
        width="100%"
        left="0px"
        borderRadius="8px"
        padding="12px 48px"
        color="white"
        backgroundColor="#220075"
        fontSize="15px"
        fontWeight="500"
      >
        Go Back
      </Button>
    </Box>
  );
}
