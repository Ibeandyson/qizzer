"use client";

import SampleModal from "@/components/ReuseableComponents/Modals/SampleModal";
import { chakra, useDisclosure } from "@chakra-ui/react";

export default function Dashboard() {
  const { isOpen, onOpen, onClose }: any = useDisclosure();

  return (
    <chakra.div>
      <chakra.button onClick={() => onOpen()}>OPmen</chakra.button>
      <SampleModal isOpen={isOpen} onClose={onClose} />
    </chakra.div>
  );
}
