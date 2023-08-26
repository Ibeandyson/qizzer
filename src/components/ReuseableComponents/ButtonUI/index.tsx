import { ReactElement } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  label: string;
  loading?: boolean;
  onClick?: (e?:any) => void | any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  w?: string;
};

function ButtonUI({ label, loading, leftIcon, rightIcon, w , onClick}: Props) {
  return (
    <Button
      type={"submit"}
      isLoading={loading}
      loadingText="Please Wait"
      spinnerPlacement="start"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={loading}
      onClick={onClick}
      w={"full"}
      maxW={{ base: w ? w : "full" }}
      h={{ base: "40px", lg: "51px" }}
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
}

export default ButtonUI;
