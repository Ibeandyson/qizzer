import React from "react";
import Desktop from "./Desktop";
import { TableContainer, chakra } from "@chakra-ui/react";
import FilterIcon from "@/components/SVG-Icons/FilterIcon";
import Mobile from "./Mobile";

type Props = {};

function TransactionHistory({}: Props) {
  return (
    <>
      <TableContainer
        boxShadow={{ base: "none", lg: "0px 0px 16px 0px rgba(0, 0, 0, 0.08)" }}
        mt={{ base: "20px", lg: "70px" }}
        py="20px"
        px={{ base: "0", lg: "30px" }}
      >
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
              Transaction History
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
        <Desktop />
        <Mobile />
      </TableContainer>
    </>
  );
}

export default TransactionHistory;
