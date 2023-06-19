'use client';
import {Box, Heading, Text} from '@chakra-ui/react';
import ButtonUI from '@/components/ReuseableComponents/ButtonUI';
import InputUI from '@/components/ReuseableComponents/InputUI';

export default function ResetPassword() {
  return (
    <Box alignItems="center">
      <Heading fontSize={{base: '16px', md: '25px'}} fontWeight="500" color="#1E1E1E" mb="2rem">
        Reset Password
      </Heading>
      <Text fontSize={{base: '12px', md: '12px'}} fontWeight="400" color="#333333" mb="1rem">
        Enter your new password
      </Text>
      <InputUI type="password" style={{marginBottom: '40px', marginTop: '20px'}} lable="New Password" value="" onchange={() => {}} />
      <InputUI type="password" style={{marginBottom: '40px', marginTop: '20px'}} lable="Comfirm Password" value="" onchange={() => {}} />
      <ButtonUI label="Save Password" onClick={() => {}} />
    </Box>
  );
}
