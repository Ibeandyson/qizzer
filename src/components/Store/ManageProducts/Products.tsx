import React from "react";
import { chakra } from "@chakra-ui/react";
import ProductsFilterContainer from "./ProductsFilterContainer";
import ProductCard from "./ProductCard";

type Props = {};

const Products = (props: Props) => {
  return (
    <chakra.div mt={{ base: "20px" }}>
      <ProductsFilterContainer />
      <chakra.div
        display="grid"
        gridTemplateColumns={{
          base: "repeat(auto-fit, minmax(175.465px, 1fr))",
          lg: "repeat(auto-fit, minmax(241px, 1fr))",
        }}
        justifyItems={{ base: "center", lg: "normal" }}
        py={{ base: "10px", lg: "20px" }}
        gap={{ base: "5px", lg: "15px" }}
      >
        {Array(10)
          .fill("")
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </chakra.div>
    </chakra.div>
  );
};

export default Products;
