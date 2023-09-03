'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ButtonUI from '@/components/ButtonUI';
import { chakra, Center, Spinner } from '@chakra-ui/react';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function Resualt() {
  const router = useRouter();
  const [score, setScore] = useState(null);

  useEffect(() => {
    const data = JSON.parse(`${localStorage.getItem('ansCount')}`);
    setScore(data);
  }, []);

  return (
    <chakra.main>
      <Center h="100vh">
        {score == null ? (
          <Spinner color="220075" size="lg" />
        ) : (
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
        )}
      </Center>
    </chakra.main>
  );
}
