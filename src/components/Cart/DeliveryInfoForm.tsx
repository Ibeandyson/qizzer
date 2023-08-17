'use client';
import { Box, GridItem, Grid, Text, chakra } from '@chakra-ui/react';
import { FC } from 'react';
import InputUI from '@/components/ReuseableComponents/InputUI';
import SelectUI from '../ReuseableComponents/SelectUI';
import ButtonUI from '../ReuseableComponents/ButtonUI';

const DeliveryInfoForm: FC = () => {
  return (
    <>
      <Box mt="20px">
        <Text textAlign="center" color="#1E1E1E" fontSize="20px" fontWeight="500">
          Provide your delivery details
        </Text>
        <chakra.div mb="20px" mt="20px" pl={{ base: '2px', md: '200px' }} pr={{ base: '2px', md: '200px' }}>
          <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={4} mt={{ base: '-55px', md: '20px' }}>
            <GridItem>
              <InputUI style={{ marginBottom: '20px' }} placeHolder="Enter home address" lable="Home Adress" onchange={() => {}} name="" value="" />
            </GridItem>
            <GridItem>
              <SelectUI style={{ marginBottom: '20px' }} placeHolder="" lable="State" onchange={() => {}} name="">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectUI>
            </GridItem>
            <GridItem>
              <SelectUI style={{ marginBottom: '20px' }} placeHolder="" lable="city" onchange={() => {}} name="">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectUI>
            </GridItem>
            <GridItem>
              <SelectUI style={{ marginBottom: '20px' }} placeHolder="" lable="Local Government Area" onchange={() => {}} name="">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectUI>
            </GridItem>
            <GridItem>
              <InputUI
                style={{ marginBottom: '20px' }}
                placeHolder="Enter any landmark closer to you"
                lable="Landmark"
                onchange={() => {}}
                name=""
                value=""
              />
            </GridItem>
            <GridItem>
              <InputUI
                style={{ marginBottom: '20px' }}
                placeHolder="Enter a reachable phone number"
                lable="Phone number"
                onchange={() => {}}
                name=""
                value=""
              />
            </GridItem>
          </Grid>

          <ButtonUI label="Continue" onClick={() => {}} />
        </chakra.div>
      </Box>
    </>
  );
};

export default DeliveryInfoForm;
