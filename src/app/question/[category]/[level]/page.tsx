'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ButtonUI from '@/components/ButtonUI';
import { chakra, Center, Spinner } from '@chakra-ui/react';
import useQuestion from '@/global/hooks/useQuestion';

export default function Question({ params }: { params: { category: number; level: string } }) {
  const router = useRouter();
  const { getQuestion, saveAns, questionData, questionLoading } = useQuestion();
  const [ansOptions, setAnsOptions] = useState([]);
  const [ans, setAns] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    getQuestion(10, params.category, params.level);
    localStorage.setItem('ansCount', JSON.stringify(0));
  }, []);

  useEffect(() => {
    if (questionData[questionIndex]?.incorrect_answers?.length > 1) {
      const ans: any = [];
      ans?.push(...questionData[questionIndex]?.incorrect_answers);
      const randomIndex = Math.floor(Math.random() * (ans?.length + 1));
      ans?.splice(randomIndex, 0, questionData[questionIndex]?.correct_answer);
      setAnsOptions(ans);
    }
  }, [questionData, questionIndex]);

  const onNext = () => {
    if (questionIndex !== 9) {
      setQuestionIndex(questionIndex + 1);
      saveAns(ans, questionIndex);
    } else {
      saveAns(ans, questionIndex);
      router.replace('/resualt');
    }
  };

  return (
    <Center h="100vh" p="20px">
      {questionLoading ? (
        <Spinner color="220075" size="lg" />
      ) : (
        <chakra.main>
          {questionData.length >= 1 && (
            <chakra.div>
              <chakra.p width={{ base: '320px', md: '550px' }} fontSize="30px">
                {`${questionIndex + 1}: ${questionData[questionIndex]?.question}`}
              </chakra.p>
              <chakra.div mt="30px">
                {ans}

                {ansOptions.map((data: any, index: number) => (
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      style={{ height: '17px', width: '17px' }}
                      type="radio"
                      value={data}
                      checked={data == ans}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <label style={{ paddingLeft: '10px', fontSize: '17px' }}>{data}</label>
                  </div>
                ))}

                <chakra.div mt="50px">
                  <ButtonUI loading={questionLoading} onClick={onNext} label="Next" w="auto" />
                </chakra.div>
              </chakra.div>
            </chakra.div>
          )}
        </chakra.main>
      )}
    </Center>
  );
}