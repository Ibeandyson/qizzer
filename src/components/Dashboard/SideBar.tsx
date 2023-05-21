import { chakra } from "@chakra-ui/react";
import Tab from "./Tab";

function SideBar() {
  return (
    <chakra.div
      pos={{ base: "fixed" }}
      display={{ base: "none", lg: "block" }}
      top="0px"
      left="0px"
      bottom="0px"
      w="282px"
      boxShadow="0px 16px 16px rgba(0, 0, 0, 0.08)"
      py="30px"
      px="20px"
    >
      <chakra.img mx="auto" src="/imgs/logo-large.svg" alt="logo" />
      <chakra.div w="full" h="0px" border="1px solid #D7D7D7" mt="20px" />
      <chakra.div pt="40px" px="5px">
        <chakra.p fontSize="12px" fontWeight={400} color="#6C6C6C">
          MENU
        </chakra.p>
        <chakra.div>
          <Tab label="Dashboard" path="/dashboard" />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}

export default SideBar;
