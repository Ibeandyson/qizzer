"use client";

import { chakra, Image, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function VerificationLayout({ children }: Props) {
  return (
    <chakra.main
      bg="#fff"
      minH="100vh"
      maxW="100vw"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "1rem", md: "5rem" }}
      py={{ base: "5rem" }}
      backgroundImage={`url(../imgs/Account-verificationBg.svg)`}
      backgroundSize="cover"
      backgroundPosition="start"
    >
      <Box display="flex" alignItems="center" mb="1.5rem">
        <Image width="39px" src="../imgs/logo.svg" />
        <Text fontSize="24px" fontWeight="500" color="#220075">
          TrustPaddi
        </Text>
      </Box>
      <Box
        backgroundColor="white"
        width={{ base: "100%", md: "60%" }}
        height="60%"
        py={{ base: "2rem", md: "2rem" }}
        px={{ base: "2rem", md: "5rem" }}
        textAlign="center"
        borderRadius="8px"
        boxShadow="md"
      >
        {children}
      </Box>
    </chakra.main>
  );
}

export default VerificationLayout;
