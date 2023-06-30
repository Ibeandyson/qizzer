"use client";
import TransactionHistory from "@/components/Finance/TransactionHistory";
import Wallet from "@/components/Finance/Wallet";
import Notify from "@/components/Finance/Notify";
import { chakra } from "@chakra-ui/react";

export default function Finance() {
  return (
    <chakra.div>
      <Notify />
      <Wallet />
      <TransactionHistory />
    </chakra.div>
  );
}
