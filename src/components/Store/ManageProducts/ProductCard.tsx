import React from "react";
import { chakra } from "@chakra-ui/react";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <chakra.div
      w={{ base: "175.465px", lg: "241px" }}
      h={{ base: "249px", lg: "342px" }}
      borderRadius={{ base: "5.825px", lg: "8px" }}
      border="0.5px solid #BCBCBC"
      p={{ base: "10px", lg: "20px" }}
      display="flex"
      flexDir="column"
      justifyContent={"space-between"}
    >
      <chakra.img
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        alt="Product"
        w="full"
        h={{ base: "144.158px", lg: "198px" }}
        borderRadius={{ base: "5px", lg: "4px" }}
      />
      <chakra.p fontSize={{ base: "8.737px", lg: "12px" }} fontWeight={500}>
        Black Trench Coats
      </chakra.p>
      <chakra.p fontSize={{ base: "11.649px", lg: "16px" }} fontWeight={700}>
        N120
      </chakra.p>
      <chakra.button
        w={{ base: "70.95px", lg: "98px" }}
        h={{ base: "23.82px", lg: "33px" }}
        borderRadius={{ base: "2px", lg: "4px" }}
        border="0.5px solid #BCBCBC"
        fontSize="11.649px"
        fontWeight={500}
        color="#220075"
        mx="auto"
      >
        Details
      </chakra.button>
    </chakra.div>
  );
};

export default ProductCard;
