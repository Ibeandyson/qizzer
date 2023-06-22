"use client";
import React, { useState } from "react";
import { chakra, useDisclosure, IconButton } from "@chakra-ui/react";

import OptionIcon from "@/components/SVG-Icons/OptionIcon";
import Notify from "@/components/Overview/Notify";
// import SampleModal from "@/components/ReuseableComponents/Modals/SampleModal";

export default function Dashboard() {
  const { isOpen, onOpen, onClose }: any = useDisclosure();
  const sheet: any = useDisclosure();

  return (
    <chakra.div>
      <Notify />
      <chakra.div p={{ lg: "30px" }}>
        <chakra.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <chakra.div display="flex" alignItems="center" gap="10px">
            <chakra.div
              w={{ base: "13px", lg: "17px" }}
              h={{ base: "34px", lg: "42px" }}
              borderRadius="4px"
              bg="#220075"
            />
            <chakra.p
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight="500"
              color="#000000"
            >
              Wallet
            </chakra.p>
          </chakra.div>
          <IconButton icon={<OptionIcon />} aria-label="option" bg="#E9E6F1" />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}
