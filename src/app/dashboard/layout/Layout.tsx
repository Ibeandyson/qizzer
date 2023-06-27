"use client";

import { chakra, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideBar from "../../../components/Dashboard/SideBar";
import NavBar from "../../../components/Dashboard/NavBar";
import SuccessfulModal from "@/components/Modals/SuccessfulModal";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.main>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <chakra.div pl={{ lg: "200px" }}>
        <NavBar onOpen={onOpen} />
        <chakra.div
          bg="white"
          p={{ base: "24px", lg: "40px" }}
          width="100%"
          height="75vh"
          zIndex="1"
          pb="20px"
        >
          {children}
        </chakra.div>
      </chakra.div>
      <SuccessfulModal />
    </chakra.main>
  );
}

export default Layout;
