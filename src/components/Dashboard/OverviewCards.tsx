import {FC, ReactElement} from 'react';
import {Box, Flex} from '@chakra-ui/react';

interface Props {
  icon?: ReactElement;
  titel?: string;
  value?: string;
}

const OverviewCards: FC = () => {
  return (
    <Box border="0.5px solid #7A7A7A" borderRadius="8px" width="330px" height="120px">
      <Flex gap={8}>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </Flex>
    </Box>
  );
};

export default OverviewCards;
