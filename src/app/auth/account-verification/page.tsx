"use client";
// import { useState } from "react";

import {
  Button,
  HStack,
  chakra,
  Text,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

export default function AccountVerification() {
  // const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle submit logic with the password value
    // console.log(password);
  };

  // const handleChange = (e: any, index: any) => {
  //   const newPassword = e.target.value;
  //   setPassword((prevPassword) => {
  //     const updatedPassword = prevPassword.split("");
  //     updatedPassword[index] = newPassword;
  //     return updatedPassword.join("");
  //   });
  // };
  return (
    <chakra.main>
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
        mb="15px"
      >
        Enter the verification code we sent to new_user@email.com.
        <span style={{ color: "purple", fontWeight: "500" }}>Resend code</span>
      </Text>
      <chakra.form onSubmit={handleSubmit}>
        <HStack
          spacing={{ base: "2", md: "4" }}
          direction="row"
          align="center"
          justify="center"
          mb="15px"
        >
          <PinInput size="md">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
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
    </chakra.main>
  );
}
