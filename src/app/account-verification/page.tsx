"use client";
import { useState } from "react";

import {
  Box,
  Button,
  Input,
  Stack,
  chakra,
  Text,
  Image,
} from "@chakra-ui/react";

export default function AccountVerification() {
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle submit logic with the password value
    console.log(password);
  };

  const handleChange = (e: any, index: any) => {
    const newPassword = e.target.value;
    setPassword((prevPassword) => {
      const updatedPassword = prevPassword.split("");
      updatedPassword[index] = newPassword;
      return updatedPassword.join("");
    });
  };
  return (
    <chakra.main>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        flexDir="column"
        alignItems="center"
        padding={{ base: "1rem", md: "5rem" }}
        py={{ base: "5rem" }}
        backgroundImage={`url(../images/AccountverificationBg.svg)`}
        backgroundSize="cover"
        backgroundPosition="start"
        overflowX="hidden"
      >
        <Box display="flex" alignItems="center" mb="1rem">
          <Image width="39px" src="../images/logo.svg" />
          <Text fontSize="24px" fontWeight="500" color="#220075">
            TrustPaddi
          </Text>
        </Box>
        <Box
          backgroundColor="white"
          width={{ base: "100%", md: "50%" }}
          minH="50%"
          py={{ base: "2rem", md: "5rem" }}
          px={{ base: "2rem", md: "2rem" }}
          textAlign="center"
          borderRadius="8px"
          boxShadow="md"
        >
          <Text
            fontSize={{ base: "16px", md: "32px" }}
            fontWeight="500"
            color="#1E1E1E"
          >
            Email Verification
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            fontWeight="400"
            textAlign="center"
            lineHeight="16.8px"
            color="#333333"
          >
            Enter the verification code we sent to new_user@email.com.
            <span style={{ color: "purple", fontWeight: "500" }}>
              Resend code
            </span>
          </Text>
          <chakra.form onSubmit={handleSubmit}>
            <Stack
              spacing={{ base: "2", md: "4" }}
              direction="row"
              align="center"
              justify="center"
            >
              {[...Array(6)].map((_, index) => (
                <Input
                  key="index"
                  my="1rem"
                  border="1px solid black"
                  type="password"
                  width={{ base: "1rem", md: "2.5rem" }}
                  size="lg"
                  value={password[index] || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </Stack>
            <Button
              type="submit"
              height="55px"
              width="100%"
              left="0px"
              borderRadius="8px"
              padding="12px 48px"
              color="white"
              backgroundColor="#220075"
            >
              Continue
            </Button>
          </chakra.form>
        </Box>
      </Box>
    </chakra.main>
  );
}
