"use client";
import { NextPage } from "next";
import { FormEvent, ChangeEvent, useState, useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import InputUI from "@/components/ReuseableComponents/InputUI";
import Link from "next/link";
import useAuth from "@/global/hooks/useAuth";
import { SignUpProps } from "@/types/auth";

const Signup: NextPage = () => {
  const { loading, signUpUser } = useAuth();
  const [signUpData, setSignUpData] = useState<SignUpProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signUpUser(signUpData);
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
              <Link href={"/auth/sign-in"}>Login here</Link>
            </span>
          </Text>

          <chakra.form onSubmit={handleSubmit}>
            <InputUI
              type="text"
              name="firstName"
              lable="First Name"
              value={signUpData.firstName}
              onchange={handleInputChange}
              placeHolder=""
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <InputUI
              type="text"
              name="lastName"
              value={signUpData.lastName}
              lable="Last Name"
              placeHolder=""
              onchange={handleInputChange}
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <InputUI
              type="email"
              lable="Email"
              name="email"
              value={signUpData.email}
              placeHolder=""
              onchange={handleInputChange}
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <InputUI
              type="number"
              lable="Phone"
              name="phone"
              value={signUpData.phone}
              placeHolder=""
              onchange={handleInputChange}
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <InputUI
              type="password"
              lable="Password"
              name="password"
              value={signUpData.password}
              placeHolder=""
              onchange={handleInputChange}
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <InputUI
              type="password"
              name="password2"
              value={signUpData.password2}
              lable="Comfirm Password"
              placeHolder=""
              onchange={handleInputChange}
              style={{ marginBottom: "40px", marginTop: "20px" }}
            />
            <ButtonUI
              loading={loading}
              label="Register"
              // onClick={handleSubmit}
            />
          </chakra.form>

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
                alt="line"
              />
              <Text fontSize="16px" color="#7A7A7A" fontWeight="500">
                or
              </Text>
              <Image
                width={{ base: "145px", md: "170px" }}
                height="20px"
                src="../imgs/Line1.svg"
                alt="line"
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
                <Image src="../icons/facebookIcon.svg" alt="line" />
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
                <Image src="../icons/Google.svg" alt="line" />
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
                <Image src="../icons/appleLogo.svg" alt="line" />
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
