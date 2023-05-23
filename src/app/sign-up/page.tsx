"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  chakra,
  Heading,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = {
      name,
      email,
      password,
    };

    console.log(params);
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      backgroundImage={`url(../images/signupBg.svg)`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <HStack flexDir="row" justify="center" align="flex-start" width="100vw">
        <div
          style={{
            padding: "10rem",
            width: "50%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <chakra.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading as="h2" size="xl" mb={4}>
              TrustedPadi
            </Heading>
            <Image src="../images/logo.svg" alt="Logo" mb={4} />
            <Text>Lorem Ipsum dalum</Text>
          </chakra.div>
        </div>

        <chakra.form
          width="50%"
          bg="white"
          flexDir="row"
          justifyContent="center"
          alignItems="flex-start"
          p={10}
          height="100vh"
          onSubmit={handleSubmit}
        >
          <chakra.div width="80%">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                mb={4}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                mb={4}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                mb={4}
              />
            </FormControl>
            <Button colorScheme="blue">Sign Up</Button>
          </chakra.div>
        </chakra.form>
      </HStack>
    </Box>
  );
}
