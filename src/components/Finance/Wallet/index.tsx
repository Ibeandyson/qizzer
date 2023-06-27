"use client";
import React, { useState } from "react";
import CopyIcon from "@/components/SVG-Icons/CopyIcon";
import DownloadIcon from "@/components/SVG-Icons/DownloadIcon";
import InfoIcon from "@/components/SVG-Icons/InfoIcon";
import OptionIcon from "@/components/SVG-Icons/OptionIcon";
import SendIcon from "@/components/SVG-Icons/SendIcon";
import TransferIcon from "@/components/SVG-Icons/TransferIcon";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import TransferModal from "@/components/Modals/TransferModal";

type Props = {};

function Wallet({}: Props) {
  const transferModal = useDisclosure();

  const [activeTab, setActiveTab] = useState({
    transfer: false,
    fundWallet: false,
    withdraw: false,
  });

  const handleTransfer = () => {
    setActiveTab({
      transfer: true,
      fundWallet: false,
      withdraw: false,
    });
    transferModal.onOpen();
  };

  const resetTab = () => {
    setActiveTab({
      transfer: false,
      fundWallet: false,
      withdraw: false,
    });
  };

  return (
    <>
      <chakra.div
        p={{ lg: "30px" }}
        boxShadow={{ base: "none", lg: "0px 0px 16px rgba(0, 0, 0, 0.08)" }}
      >
        <chakra.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <chakra.div display="flex" alignItems="center" gap="10px">
            <chakra.div
              w={{ base: "13px", lg: "17px" }}
              h={{ base: "34px", lg: "40px" }}
              borderRadius="4px"
              bg="#220075"
            />
            <chakra.p
              fontSize={{ base: "16px", lg: "18px" }}
              fontWeight="500"
              color="#000000"
            >
              Wallet
            </chakra.p>
          </chakra.div>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton>
                  <IconButton
                    icon={<OptionIcon />}
                    aria-label="option"
                    bg="#E9E6F1"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    color="#7A7A7A"
                    fontSize="14px"
                    fontWeight={500}
                    _hover={{ bgColor: "#E9E6F1", color: "#4E3391" }}
                  >
                    Add Bank Account
                  </MenuItem>
                  <MenuItem
                    onClick={() => alert("Kagebunshin")}
                    color="#7A7A7A"
                    fontSize="14px"
                    fontWeight={500}
                    _hover={{ bgColor: "#E9E6F1", color: "#4E3391" }}
                  >
                    Reset Wallet Pin
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </chakra.div>
        <chakra.div
          mt="30px"
          display="grid"
          gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="20px"
          bg={{ base: "#220075", lg: "#fff" }}
          borderRadius="8px"
          p={{ base: "25px", lg: "0" }}
        >
          <chakra.div>
            <chakra.div display="flex" alignItems="center" gap="10px">
              <chakra.div display={{ base: "none", lg: "block" }}>
                <InfoIcon />
              </chakra.div>
              <chakra.p
                fontSize={{ base: "12px", lg: "16px" }}
                fontWeight="400"
                color={{ base: "#FFF", lg: "#7A7A7A" }}
              >
                Pay tag
              </chakra.p>
            </chakra.div>
            <chakra.div
              display="flex"
              alignItems="center"
              gap="10px"
              mt={{ base: "5px", lg: "10px" }}
            >
              <chakra.p
                fontSize={{ base: "16px", lg: "20px" }}
                fontWeight="400"
                color={{ base: "#FFF", lg: "#1E1E1E" }}
              >
                Victory Roberts
              </chakra.p>
              <IconButton
                icon={<CopyIcon color="#FFF" />}
                aria-label="copy-icon"
                bg={{ base: "#220075", lg: "#FFF" }}
              />
            </chakra.div>
          </chakra.div>
          <chakra.div display={{ lg: "none" }} />
          <chakra.div
            display="flex"
            alignItems={{ base: "start", lg: "end" }}
            flexDir="column"
          >
            <chakra.div display="flex" gap="10px">
              <chakra.div display={{ base: "none", lg: "block" }}>
                <InfoIcon />
              </chakra.div>
              <chakra.p
                fontSize="16px"
                fontWeight="400"
                color={{ base: "#FFF", lg: "#7A7A7A" }}
              >
                Available Funds
              </chakra.p>
            </chakra.div>
            <chakra.p
              fontSize="20px"
              fontWeight="400"
              color={{ base: "#FFF", lg: "#1E1E1E" }}
              mt="10px"
            >
              $0.00
            </chakra.p>
          </chakra.div>
          <chakra.div display="flex" alignItems="end" flexDir="column">
            <chakra.div display="flex" alignItems="center" gap="10px">
              <chakra.div display={{ base: "none", lg: "block" }}>
                <InfoIcon />
              </chakra.div>
              <chakra.p
                fontSize="16px"
                fontWeight="400"
                color={{ base: "#FFF", lg: "#7A7A7A" }}
              >
                Locked Funds
              </chakra.p>
            </chakra.div>
            <chakra.p
              fontSize="20px"
              fontWeight="400"
              color={{ base: "#FFF", lg: "#1E1E1E" }}
              mt="10px"
            >
              $0.00
            </chakra.p>
          </chakra.div>
        </chakra.div>
        <chakra.div
          display="grid"
          gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          justifyItems="center"
          gap="20px"
          mt="30px"
        >
          <chakra.div
            h={{ base: "157px", lg: "141px" }}
            border="1px solid #7A7A7A"
            borderRadius="4px"
            maxW="284px"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            gap="10px"
            cursor="pointer"
            bg={activeTab.fundWallet ? "#220075" : "#FFF"}
          >
            <chakra.div
              w="48px"
              h="48px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="#F9F9F9"
              borderRadius="100%"
            >
              <DownloadIcon />
            </chakra.div>
            <chakra.p
              fontSize={{ base: "12px", lg: "20px" }}
              color={activeTab.fundWallet ? "#FFF" : "#7A7A7A"}
            >
              Fund wallet
            </chakra.p>
          </chakra.div>
          <chakra.div
            h={{ base: "157px", lg: "141px" }}
            border="1px solid #7A7A7A"
            borderRadius="4px"
            maxW="284px"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            gap="10px"
            cursor="pointer"
            bg={activeTab.withdraw ? "#220075" : "#FFF"}
          >
            <chakra.div
              w="48px"
              h="48px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="#F9F9F9"
              borderRadius="100%"
            >
              <SendIcon />
            </chakra.div>
            <chakra.p
              fontSize={{ base: "12px", lg: "20px" }}
              color={activeTab.withdraw ? "#FFF" : "#7A7A7A"}
            >
              Withdraw
            </chakra.p>
          </chakra.div>
          <chakra.div
            h={{ base: "157px", lg: "141px" }}
            border="1px solid #7A7A7A"
            borderRadius="4px"
            maxW="284px"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            gap="10px"
            cursor="pointer"
            bg={activeTab.transfer ? "#220075" : "#FFF"}
            onClick={handleTransfer}
          >
            <chakra.div
              w="48px"
              h="48px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="#F9F9F9"
              borderRadius="100%"
            >
              <TransferIcon />
            </chakra.div>
            <chakra.p
              fontSize={{ base: "12px", lg: "20px" }}
              color={activeTab.transfer ? "#FFF" : "#7A7A7A"}
            >
              Transfer
            </chakra.p>
          </chakra.div>
        </chakra.div>
      </chakra.div>
      <TransferModal
        isOpen={transferModal.isOpen}
        onClose={() => {
          transferModal.onClose();
          resetTab();
        }}
      />
    </>
  );
}

export default Wallet;
