'use client';

import {Box, Button, Heading, Text, Image, HStack, PinInput, PinInputField} from '@chakra-ui/react';

export default function OtpVerification() {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Heading fontSize={{base: '16px', md: '25px'}} fontWeight="500" color="#1E1E1E" mb="2rem">
        OTP Verification
      </Heading>
      <Text fontSize={{base: '12px', md: '12px'}} fontWeight="400" color="#333333" mb="1rem">
        Enter the verification code we sent to new_user@email.com
      </Text>
      <Text fontSize={{base: '12px', md: '12px'}} fontWeight="600" color="#220075" mb="3rem">
        Resend Code
      </Text>
      <HStack mb="3rem">
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button
        height="55px"
        width="100%"
        left="0px"
        borderRadius="8px"
        padding="12px 48px"
        color="white"
        backgroundColor="#220075"
        fontSize="15px"
        fontWeight="500">
        Continue
      </Button>
    </Box>
  );
}
