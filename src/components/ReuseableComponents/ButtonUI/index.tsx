import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  label: string;
  loading: boolean;
  onClick: () => void;
};

function ButtonUI({ label, loading, onClick }: Props) {
  return (
    <Button
      isLoading={loading}
      disabled={loading}
      onClick={onClick}
      w={{ base: "full" }}
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
