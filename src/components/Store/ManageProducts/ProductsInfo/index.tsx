import React from "react";
import { chakra } from "@chakra-ui/react";

import InfoCard from "./InfoCard";

type Props = {};

const ProductsInfo = (props: Props) => {
  return (
    <chakra.div
      display="flex"
      alignItems="center"
      gap={{ base: "20px", lg: "30px" }}
      overflowX="scroll"
      py={{ base: "10px", lg: "30px" }}
    >
      <InfoCard label="Total Products" iconColor="#F69E18" />
      <InfoCard label="Published Products" iconColor="#3D9B10" />
      <InfoCard label="Drafts" iconColor="#267AC8" />
    </chakra.div>
  );
};

export default ProductsInfo;
