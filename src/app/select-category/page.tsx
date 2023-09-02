'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { chakra, Center, Grid, GridItem, Box, Text, Spinner } from '@chakra-ui/react';
import useCategory from '@/global/hooks/useCategory';
import AnimatedDiv from '@/components/AnimatedDiv';
import BottomSheetUI from '@/components/BottomSheet';
import ButtonUI from '@/components/ButtonUI';
import SelectUI from '@/components/SelectUI';

export default function SelectCategory() {
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const router = useRouter();
  const { getCategory, categoryData, categoryLoading } = useCategory();

  const onCloseSheet = () => {
    setIsOpenSheet(false);
  };

  const onOpenSheet = (categoryData: number) => {
    setIsOpenSheet(true);
    setSelectedCategory(categoryData);
  };

  const onStart = () => {
    router.replace(`/question/${selectedCategory}/${selectedLevel}`);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const categoryAsLable: any = categoryData.filter((data: any) => data?.id == selectedCategory)[0];
  return (
    <chakra.main>
      <Center>
        <chakra.div mt="20">
          <chakra.h1 fontSize="30px" fontWeight="bold">
            Select a Category
          </chakra.h1>
        </chakra.div>
      </Center>
      {categoryLoading ? (
        <Center h="50vh" mt={50}>
          <Spinner color="220075" size="lg" />
        </Center>
      ) : (
        <Grid templateColumns={['1fr', '1fr', 'repeat(3, 1fr)']} gap={6} p="20px" mt="60px">
          {categoryData?.map((data: any) => (
            <GridItem key={data?.id}>
              <AnimatedDiv>
                <Box onClick={() => onOpenSheet(data.id)} cursor="pointer" w="100%" h="50" bg="#220075" borderRadius="10">
                  <Text justifyContent="center" align="center" p="10px" color="#ffffff">
                    {data?.name}
                  </Text>
                </Box>
              </AnimatedDiv>
            </GridItem>
          ))}
        </Grid>
      )}

      <BottomSheetUI isOpen={isOpenSheet} onClose={onCloseSheet}>
        <Center mt="100px">
          <chakra.div>
            <Text mb="30px" textAlign="center" fontSize="15px">
              You selected <chakra.span fontWeight="bold">{categoryAsLable?.name}</chakra.span> as a category, now you are to select a level to start
            </Text>
            <SelectUI lable="Select Level" onchange={(e) => setSelectedLevel(e.target.value)}>
              <option  value="">{'>>Select level<<'}</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </SelectUI>
            <chakra.div mt="30px">{selectedLevel.length > 1 && <ButtonUI label="Start" onClick={onStart} />}</chakra.div>
          </chakra.div>
        </Center>
      </BottomSheetUI>
    </chakra.main>
  );
}
