"use client";
import { chakra, Text, Image, Box, Heading } from "@chakra-ui/react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import InputUI from "@/components/ReuseableComponents/InputUI";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import useAuth from "@/global/hooks/useAuth";

function SignUPForm() {
  const { loading, signInUser } = useAuth();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInUser(signInData);
  };

  return (
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
          Welcome back
        </Heading>
        <Text
          fontSize="14px"
          fontWeight="400"
          textAlign="center"
          lineHeight="16.8px"
          mb="50px"
        >
          Don’t have an account?
          <span
            style={{
              color: "purple",
              fontWeight: "500",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            <Link href={"/auth/sign-up"}>Register here</Link>
          </span>
        </Text>
        <chakra.form onSubmit={handleSubmit}>
          <InputUI
            type="email"
            name="email"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Email"
            value={signInData.email}
            onchange={handleInputChange}
            placeHolder=""
          />
          <InputUI
            type="password"
            name="password"
            style={{ marginBottom: "40px", marginTop: "20px" }}
            lable="Password"
            value={signInData.password}
            onchange={handleInputChange}
            placeHolder=""
          />
          <ButtonUI loading={loading} label="Login" />
        </chakra.form>

        <Text
          fontSize="14px"
          fontWeight="400"
          textAlign="center"
          lineHeight="16.8px"
          my="15px"
        >
          Can’t remember your password?
          <span
            style={{
              color: "purple",
              fontWeight: "500",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            <Link href={"/auth/forgot-password"}>Reset Password</Link>
          </span>
        </Text>

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
          <Box display="flex" justifyContent="center" alignItems="center">
            <chakra.div
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src="../icons/facebookIcon.svg" alt="icon" />
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
              <Image src="../icons/Google.svg" alt="icon" />
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
              <Image src="../icons/appleLogo.svg" alt="icon" />
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
  );
}
export default SignUPForm;
