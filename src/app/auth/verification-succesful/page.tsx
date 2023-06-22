'use client';
import {Box, Button, Heading, Text, Image} from '@chakra-ui/react';
import ButtonUI from '@/components/ReuseableComponents/ButtonUI';

export default function VerificationSuccesful() {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Heading fontSize={{base: '16px', md: '32px'}} fontWeight="500" color="#1E1E1E" mb="2rem">
        Verification Successful
      </Heading>
      <Image width={{base: '100px', md: '100px'}} src="../imgs/verification-succesful.svg" mb="2rem" />
      <Text fontSize={{base: '12px', md: '12px'}} fontWeight="400" color="#333333" mb="3rem">
        You’ve successfully verified your email
      </Text>
      <ButtonUI label="Go To Login" onClick={() => {}} />
    </Box>
  );
}
