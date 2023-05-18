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
    <main>
      <SideBar />
      <chakra.div pl="300px">
        <NavBar />
        <chakra.div p="20px">{children}</chakra.div>
      </chakra.div>
    </main>
  );
}

export default Layout;
