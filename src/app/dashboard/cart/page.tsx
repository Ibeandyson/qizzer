'use client';
import { chakra, Stepper, Step, StepIndicator, StepStatus, Box, Button, useSteps, Text, StepIcon, StepSeparator, Flex } from '@chakra-ui/react';
import { CartList, DeliveryInfoForm } from '@/components/Cart';
import ButtonUI from '@/components/ReuseableComponents/ButtonUI';

const steps = [
  { title: 'Products In Cart', id: 1 },
  { title: 'Delivery Details', id: 2 },
  { title: 'Payment', id: 3 },
];

export default function Cart({ params }: { params: { id: string } }) {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <Box position="relative">
        <Stepper size="sm" index={activeStep} gap="0">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator cursor="pointer" bg="white" onClick={() => setActiveStep(step.id)}>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Flex justifyContent="space-between">
          {steps.map((data, index) => (
            <Text key={index} mt="15px" fontSize="10px" fontWeight="600">
              {data.title}
            </Text>
          ))}
        </Flex>
      </Box>
      {activeStep == 1 && (
        <chakra.div shadow={{ base: 'none', md: 'sm' }} mt="50px">
          <CartList />
          <Box mt={{ base: '10%', md: '5%' }} display="flex">
            <Button mb="5%" variant="outline" borderColor="0.5px #333333" color="#333333" fontSize="15px" fontWeight="500">
              Clear Caert
            </Button>
            <Box ml="auto">
              <Button
                onClick={() => setActiveStep(2)}
                _hover={{ backgroundColor: '#220075' }}
                ml="20px"
                mb="5%"
                variant="outline"
                bgColor="#220075"
                color="#FFFFFF"
                fontSize="15px"
                fontWeight="500"
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </chakra.div>
      )}
      {activeStep == 2 && (
        <chakra.div>
          <DeliveryInfoForm />
        </chakra.div>
      )}
    </>
  );
}
