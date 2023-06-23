'use client';

import {Box, chakra, Heading, Text, Image, Grid, GridItem, Flex} from '@chakra-ui/react';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

function AuthLayout({children}: Props) {
  return (
    <chakra.main bg="#fff">
      <Image src="/imgs/half-circle.svg" alt="icon" pos="absolute" top={{base: '-30px', lg: '0'}} left={{base: '-30px', lg: '0'}} />
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}>
        <GridItem w="100%">
          <Flex
            bg="#FFFBF5"
            position="sticky"
            top={0}
            left={0}
            minHeight="100vh"
            display={{base: 'none', md: 'none', lg: 'block'}}
            maxW="720px"
            py="7rem"
            px="7rem"
            justifyContent="center"
            alignItems="center">
            <chakra.div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Heading as="h1" fontSize="32px" fontWeight="500" mb={4}>
                TrustPaddi
              </Heading>
              <Box w="64px" h="75px">
                <Image src="../imgs/logo.svg" alt="Logo" />
              </Box>
              <Text w="350px" fontSize="22px" fontWeight="500" textAlign="center" mb="10px" lineHeight="54.57px">
                Transact Securely with online vendors & marketplaces, gain customers&apos; trust with TrustPaddi
              </Text>
              <Text fontSize="12px" fontWeight="400" textAlign="center">
                Your no.1 social commerce platform
              </Text>
              <chakra.div display="flex" justifyContent="center" alignItems="center" mt="40px">
                <Image src="../icons/Twitter.svg" />
                <Image src="../icons/Linkedin.svg" mx="10px" />
                <Image src="../icons/Instagram.svg" />
              </chakra.div>
              <Text fontSize="9px" my="20px" fontWeight="400" color="#7A7A7A" textAlign="center">
                Tel: +2349164590294
              </Text>
              <Text fontSize="9px" fontWeight="400" color="#7A7A7A" textAlign="center">
                2023 TrustPaddi. All rights reserved
              </Text>
            </chakra.div>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Box py="7rem" justifyContent="center" alignItems="center"  maxW="100%"  bg={{base: '#FFFBF5', lg: '#FFF'}}>
            {children}
          </Box>
        </GridItem>
      </Grid>
    </chakra.main>
  );
}

export default AuthLayout;
