import React from "react";
import { Input, InputGroup, InputLeftElement, chakra } from "@chakra-ui/react";
import SearchIcon from "@/components/SVG-Icons/SearchIcon";
import FilterIcon from "@/components/SVG-Icons/FilterIcon";
type Props = {};

const ProductsFilterContainer = (props: Props) => {
  return (
    <>
      <chakra.div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py="30px"
      >
        <chakra.div display="flex" alignItems="center" gap="10px">
          <chakra.div
            w={{ base: "13px", lg: "17px" }}
            h={{ base: "34px", lg: "40px" }}
            borderRadius="4px"
            bg="#220075"
          />
          <chakra.p
            fontSize={{ base: "16px", lg: "16px" }}
            fontWeight="500"
            color="#000000"
          >
            Product List
          </chakra.p>
        </chakra.div>
        <chakra.button
          w="108px"
          h="36px"
          borderRadius="4px"
          border="1px solid #7A7A7A"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <FilterIcon />
          <chakra.p fontSize="16px" fontWeight="500" color="#7A7A7A">
            Filters
          </chakra.p>
        </chakra.button>
      </chakra.div>
      <InputGroup w={{ base: "full", lg: "420px" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="#7A7A7A" />
        </InputLeftElement>
        <Input
          placeholder="Search for any products... "
          bg="#F4EDFF"
          borderRadius="8px"
          _placeholder={{ fontSize: "12px", fontWeight: 400 }}
          _focus={{ borderColor: "#220075" }}
        />
      </InputGroup>
    </>
  );
};

export default ProductsFilterContainer;
