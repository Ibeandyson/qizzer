"use client";
import React from "react";
import { chakra, useDisclosure } from "@chakra-ui/react";
import SampleModal from "../../components/ReuseableComponents/Modals/SampleModal";
import SampleBottomSheet from "@/components/ReuseableComponents/BottomSheet/SampleBottoSheet";
// import SampleModal from "@/components/ReuseableComponents/Modals/SampleModal";

export default function Dashboard() {
  const { isOpen, onOpen, onClose }: any = useDisclosure();
  const sheet: any = useDisclosure();

  return (
    <chakra.div>
      <chakra.button onClick={() => onOpen()}>OPmen</chakra.button>
      <chakra.button onClick={() => sheet.onOpen()}>OPen Sheet </chakra.button>

      <SampleModal isOpen={isOpen} onClose={onClose} />
      <SampleBottomSheet
        isOpen={sheet.isOpen}
        onClose={() => sheet.onClose()}
      />
    </chakra.div>
  );
}
