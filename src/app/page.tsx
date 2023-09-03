'use client';
import { useRouter } from 'next/navigation';
import ButtonUI from '@/components/ButtonUI';
import { chakra, Center } from '@chakra-ui/react';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function Home() {
  const router = useRouter();
  return (
    <chakra.main>
      <Center h="100vh">
        <chakra.div>
        <AnimatedDiv>
            <chakra.div mb="10">
              <chakra.h1 fontSize="30px" fontWeight="bold">
                Welcome To Qizzer
              </chakra.h1>
            </chakra.div>
          </AnimatedDiv>
          <ButtonUI onClick={() => router.push('/select-category')} label="Start Now" w="auto" />
        </chakra.div>
      </Center>
    </chakra.main>
  );
}
