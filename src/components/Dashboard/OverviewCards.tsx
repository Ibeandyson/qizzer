import {FC, ReactElement} from 'react';
import {Box, Flex, Text, chakra} from '@chakra-ui/react';
import CircleArrowIcon from '../SVG-Icons/CircleArrowIcon';
import Link from 'next/link';

interface Props {
  icon: ReactElement;
  titel: string;
  value: string;
  linkPath?: string;
}

const OverviewCards: FC<Props> = ({icon, titel, value}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="0.5px solid #7A7A7A"
      borderRadius="8px"
      p="10px"
      width="330px"
      height="120px">
      <Flex gap={8}>
        <chakra.div>{icon}</chakra.div>
        <chakra.div width="100px" >
          <Text mt="8px" fontSize="10px" color="#7A7A7A">
            {titel}
          </Text>
          <Text mt="10px" fontSize="17px" fontWeight={600} color="#1E1E1E">
            {value}
          </Text>
        </chakra.div>
        <chakra.div mt="20px">
          <Link href="">
            <CircleArrowIcon/>
          </Link>
        </chakra.div>
      </Flex>
    </Box>
  );
};

export default OverviewCards;
