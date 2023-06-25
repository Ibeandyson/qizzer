import React from "react";

import { chakra } from "@chakra-ui/react";
import WalletIcon from "@/components/SVG-Icons/WalletIcon";

type Props = {};

function Mobile({}: Props) {
  return (
    <chakra.div display={{ base: "block", lg: "none" }}>
      <chakra.div
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <chakra.p fontSize="14px" fontWeight="500" color="#1E1E1E">
          Purpose
        </chakra.p>
        <chakra.p>Amount</chakra.p>
      </chakra.div>
      {Array(10)
        .fill("")
        .map((_, i) => (
          <chakra.div
            key={i}
            w="full"
            h="64px"
            borderRadius="4px"
            border="1px solid #E2E2E2"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my="24px"
            px="10px"
            _hover={{ border: "1px solid #220075" }}
          >
            <chakra.div display="flex" alignItems="center" gap="10px">
              <chakra.div
                w="32px"
                h="32px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                bg="#F1EBFF"
              >
                <WalletIcon />
              </chakra.div>
              <chakra.div>
                <chakra.p fontSize="12px" fontWeight="500" color="#333333">
                  {i % 2 == 0 ? "Deposit" : "Transfer"}
                </chakra.p>
                <chakra.p fontSize="10px" color="#333333">
                  2 mins ago
                </chakra.p>
              </chakra.div>
            </chakra.div>
            <chakra.p
              color={i % 2 == 0 ? "#26C62C" : "#EC0303"}
              fontSize="12px"
            >
              {i % 2 == 0 ? "+" : "-"}
              $100.00
            </chakra.p>
          </chakra.div>
        ))}
    </chakra.div>
  );
}

export default Mobile;
