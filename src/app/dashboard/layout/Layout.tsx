"use client";

import { chakra, useDisclosure, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideBar from "../../../components/Dashboard/SideBar";
import NavBar from "../../../components/Dashboard/NavBar";

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
          ml={{ base: "0", lg: "10px" }}
          p={{ base: "5px", lg: "40px" }}
          width="100%"
          height="75vh"
          zIndex="1"
        >
          {children}
        </chakra.div>
      </chakra.div>
    </chakra.main>
  );
}

export default Layout;
