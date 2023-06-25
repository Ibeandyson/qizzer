"use client";
import { NextPage } from "next";
import { FormEvent, ChangeEvent, useState } from "react";
import {
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import InputUI from "@/components/ReuseableComponents/InputUI";
import Link from "next/link";

const Signup: NextPage = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main>
      <chakra.div
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        px={{ base: "2.5rem", md: "7rem" }}
        minH="100vh"
      >
        <chakra.div width="100%" height="100%">
          <Heading
            as="h1"
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
            mb="50px"
          >
            Have an account?
            <span
              style={{
                color: "purple",
                fontWeight: "500",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              <Link href={"/auth/log-in"}>Login here</Link>
            </span>
          </Text>

          <InputUI
            type="text"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="First Name"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <InputUI
            type="text"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Last Name"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <InputUI
            type="email"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Email"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <InputUI
            type="number"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Phone"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <InputUI
            type="password"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Password"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <InputUI
            type="password"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Comfirm Password"
            value=""
            onchange={() => {}}
            placeHolder=""
          />
          <ButtonUI loading={false} label="Register" onClick={() => {}} />
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
                src="../imgs/Line1.svg"
              />
              <Text fontSize="16px" color="#7A7A7A" fontWeight="500">
                or
              </Text>
              <Image
                width={{ base: "145px", md: "170px" }}
                height="20px"
                src="../imgs/Line1.svg"
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
      </chakra.div>
    </main>
  );
};

export default Signup;
