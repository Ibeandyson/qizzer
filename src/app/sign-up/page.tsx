"use client";

import {
  Box,
  FormControl,
  FormLabel,
  VStack,
  chakra,
  Input,
  Button,
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
    <chakra.div>
      <Box maxWidth="400px" mx="auto" p={4}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              loadingText="Signing up..."
            >
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </chakra.div>
  );
}
