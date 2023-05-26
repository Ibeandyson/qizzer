"use client";

import SignUPForm from "@/components/SignUP/Form";
import { Box, chakra, Heading, Text, Image, HStack } from "@chakra-ui/react";

export default function Signup() {
  return (
    <chakra.main>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        // backgroundImage={`url(../images/signupBg.svg)`}
        backgroundSize="cover"
        backgroundPosition="start"
        overflowX="hidden" // Mobile background image
        sx={{
          "@media (max-width: 768px)": {
            backgroundImage: `url(../images/signupMobileBg.svg)`,
          },
        }}
      >
        <HStack
          flexDir={{ base: "column", md: "row" }}
          justify="center"
          align="flex-start"
          width="100vw"
        >
          <Box
            py="5rem"
            px="3rem"
            maxW="50%"
            height="100%"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="flex-start"
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
                TrustedPadi
              </Heading>
              <Box w="64px" h="75px">
                <Image src="../images/logo.svg" alt="Logo" />
              </Box>
              <Text
                fontSize="32px"
                fontWeight="500"
                textAlign="center"
                mb="10px"
              >
                Transact Securely with online vendors & marketplaces, gain
                customers trust with TrustPaddi.
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
          {/* SIGN UP FORM  */}
          <SignUPForm />
        </HStack>
      </Box>
    </chakra.main>
  );
}
