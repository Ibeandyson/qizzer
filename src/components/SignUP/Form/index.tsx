import {
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

function SignUPForm() {
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
    <chakra.form
      maxW={{ base: "100%", md: "50%" }}
      bg={{ base: "transparent", md: "white" }}
      flexDir="row"
      justifyContent="center"
      alignItems="flex-start"
      p={{ base: "1rem", md: "7rem" }}
      minH="100vh"
      onSubmit={handleSubmit}
    >
      <chakra.div width="100%" height="100%">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight="500"
          lineHeight="38.4px"
          mb={4}
        >
          Sign up to get started
        </Heading>
        <Text
          fontSize="14px"
          fontWeight="400"
          textAlign="center"
          lineHeight="16.8px"
        >
          Don’t have an account?
          <span style={{ color: "purple", fontWeight: "500" }}>
            Register here
          </span>
        </Text>
        <FormControl top="6px">
          <FormLabel fontSize="14px" fontWeight="500" lineHeight="16.8px">
            Name
          </FormLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            mb={4}
            width="100%"
            height="50px"
            padding="8px"
            borderRadius="8px"
            borderColor="#7A7A7A"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="14px" fontWeight="500" lineHeight="16.8px">
            Email Address
          </FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            mb={4}
            width="100%"
            height="50px"
            padding="8px"
            borderRadius="8px"
            borderColor="#7A7A7A"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="14px" fontWeight="500" lineHeight="16.8px">
            Password
          </FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            mb={4}
            width="100%"
            height="50px"
            padding="8px"
            borderRadius="8px"
            borderColor="#7A7A7A"
          />
          <Button
            height="55px"
            width="100%"
            left="0px"
            borderRadius="8px"
            padding="12px 48px"
            color="white"
            backgroundColor="#220075"
          >
            Register
          </Button>
        </FormControl>
        <Box width="fit">
          <chakra.div
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            my="15px"
          >
            <Image
              width={{ base: "145px", md: "170px" }}
              height="20px"
              src="../images/Line1.svg"
            />
            <Text fontSize="16px" color="#7A7A7A" fontWeight="500">
              or
            </Text>
            <Image
              width={{ base: "145px", md: "170px" }}
              height="20px"
              src="../images/Line1.svg"
            />
          </chakra.div>
          <Text
            fontSize="14px"
            my="15px"
            fontWeight="400"
            color="#333333"
            textAlign="center"
          >
            Sign Up with any of these
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            <chakra.div
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src="../icons/facebookIcon.svg" />
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#1E1E1E"
                textAlign="center"
                mt="5px"
              >
                Facebook
              </Text>
            </chakra.div>
            <chakra.div
              display="flex"
              flexDirection="column"
              alignItems="center"
              my="10px"
              mx="60px"
            >
              <Image src="../icons/Google.svg" />
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#1E1E1E"
                textAlign="center"
                mt="5px"
              >
                Google
              </Text>
            </chakra.div>
            <chakra.div
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src="../icons/appleLogo.svg" />
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#1E1E1E"
                textAlign="center"
                mt="5px"
              >
                Apple
              </Text>
            </chakra.div>
          </Box>
        </Box>
      </chakra.div>
    </chakra.form>
  );
}

export default SignUPForm;
