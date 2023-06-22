'use client';
import {Box, Heading, Text} from '@chakra-ui/react';
import ButtonUI from '@/components/ReuseableComponents/ButtonUI';
import InputUI from '@/components/ReuseableComponents/InputUI';

export default function ForgotPassword() {
  return (
    <Box alignItems="center">
      <Heading fontSize={{base: '16px', md: '25px'}} fontWeight="500" color="#1E1E1E" mb="2rem">
        Forgot Password
      </Heading>
      <Text fontSize={{base: '12px', md: '12px'}} fontWeight="400" color="#333333" mb="1rem">
        Enter the email address you registered with
      </Text>
      <InputUI type='email'  style={{marginBottom: '40px', marginTop: "20px"}} lable="Email Address" value="" onchange={() => {}} placeHolder="example@email.com" />
      <ButtonUI label="Request code" onClick={() => {}} />
    </Box>
  );
}
