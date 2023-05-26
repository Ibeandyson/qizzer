"use client";

import { Box, chakra, Heading, Text, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <chakra.main bg="#fff">
      <Image
        src="/imgs/half-circle.svg"
        alt="icon"
        pos="absolute"
        top={{ base: "-30px", lg: "0" }}
        left={{ base: "-30px", lg: "0" }}
      />
      <Box
        display={{ lg: "grid" }}
        gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
      >
        <Box bg="#FFFBF5" display={{ base: "none", md: "none", lg: "block" }}>
          <Box
            maxW="720px"
            py="5rem"
            px="3rem"
            height="100%"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="flex-start"
            ml="auto"
          >
            <chakra.div
              style={{
                // width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Heading
                as="h1"
                size="2xl"
                fontSize="32px"
                fontWeight="500"
                mb={4}
              >
                TrustPaddi
              </Heading>
              <Box w="64px" h="75px">
                <Image src="../images/logo.svg" alt="Logo" />
              </Box>
              <Text
                w="539px"
                fontSize="32px"
                fontWeight="500"
                textAlign="center"
                mb="10px"
                lineHeight="54.57px"
              >
                Transact Securely with online vendors & marketplaces, gain
                customers&apos; trust with TrustPaddi
              </Text>
              <Text fontSize="20px" fontWeight="400" textAlign="center">
                Your no.1 social commerce platform
              </Text>
              <chakra.div
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="35px"
              >
                <Image src="../icons/Twitter.svg" />
                <Image src="../icons/Linkedin.svg" mx="10px" />
                <Image src="../icons/Instagram.svg" />
              </chakra.div>
              <Text
                fontSize="16px"
                my="20px"
                fontWeight="400"
                color="#7A7A7A"
                textAlign="center"
              >
                Tel: +2349164590294
              </Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                color="#7A7A7A"
                textAlign="center"
              >
                2023 TrustPaddi. All rights reserved
              </Text>
            </chakra.div>
          </Box>
        </Box>
        {/* SIGN UP FORM  */}
        <Box
          maxW="720px"
          pt={{ base: "110px", lg: "0" }}
          bg={{ base: "#FFFBF5", lg: "#FFF" }}
        >
          {children}
        </Box>
      </Box>
    </chakra.main>
  );
}

export default AuthLayout;
