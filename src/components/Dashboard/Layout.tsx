"use client";

import { chakra, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.main>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <chakra.div pl={{ lg: "300px" }}>
        <NavBar onOpen={onOpen} />
        <chakra.div p="20px">{children}</chakra.div>
      </chakra.div>
    </chakra.main>
  );
}

export default Layout;
