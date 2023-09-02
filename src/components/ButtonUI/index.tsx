import { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';

interface IProps {
  label: string;
  disabled?: boolean,
  loading?: boolean;
  onClick?: (e?: any) => void | any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  w?: string;
}

const ButtonUI = ({ label, loading, leftIcon, rightIcon, w, onClick , disabled}: IProps) => {
  return (
    <Button
      type={'submit'}
      isLoading={loading}
      loadingText="Please Wait"
      spinnerPlacement="start"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={disabled}
      onClick={onClick}
      w={'full'}
      maxW={{ base: w ? w : 'full' }}
      h={{ base: '40px', lg: '51px' }}
      bg="#220075"
      borderRadius="8px"
      color="#FFF"
      fontSize="16px"
      fontWeight="500"
      _hover={{}}
    >
      {label}
    </Button>
  );
};

export default ButtonUI;
