"use client";

import { chakra } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <chakra.main>
      <SideBar />
      <chakra.div pl={{ lg: "300px" }}>
        <NavBar />
        <chakra.div p="20px">{children}</chakra.div>
      </chakra.div>
    </chakra.main>
  );
}

export default Layout;
