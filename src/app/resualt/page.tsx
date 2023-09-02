'use client';
import { useRouter } from 'next/navigation';
import ButtonUI from '@/components/ButtonUI';
import { chakra, Center } from '@chakra-ui/react';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function Result() {
  const router = useRouter();
  const score = JSON.parse(`${localStorage.getItem('ansCount')}`);
  return (
    <chakra.main>
      <Center h="100vh">
        <chakra.div>
          <AnimatedDiv>
            <chakra.div mb="10">
              <chakra.h1 fontSize="30px" fontWeight="bold">
                Your Total Score
              </chakra.h1>
              <chakra.h1 textAlign="center" fontSize="50px" mt="15px" fontWeight="bold">
                {`${score} / 10`}
              </chakra.h1>
            </chakra.div>
          </AnimatedDiv>
          <ButtonUI onClick={() => router.push('/select-category')} label="Play Again" w="auto" />
        </chakra.div>
      </Center>
    </chakra.main>
  );
}
