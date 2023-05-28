import { chakra } from "@chakra-ui/react";
import MultiTabs from "@/components/Dashboard/MultiTabs";
import Tab from "./Tab";
import DashboardIcon from "../SVG-Icons/DashboardIcon";
import OrdersIcon from "../SVG-Icons/OrdersIcon";
import LogisticsIcon from "../SVG-Icons/LogisticsIcon";
import PrivacyIcon from "../SVG-Icons/PrivacyIcon";
import SettingsIcon from "../SVG-Icons/SettingsIcon";

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
        <chakra.p fontSize="12px" fontWeight={500} color="#6C6C6C">
          MENU
        </chakra.p>
        <chakra.div mt="30px">
          <Tab Icon={DashboardIcon} label="Dashboard" path="/dashboard" />
          <MultiTabs />
          <Tab Icon={OrdersIcon} label="Orders" path="/orders" />
          <Tab Icon={LogisticsIcon} label="Logistics" path="/logistics" />
          <chakra.div
            w="full"
            h="0px"
            border="1px solid #D7D7D7"
            mt="20px"
            mb="20px"
          />
          <Tab Icon={PrivacyIcon} label="Privacy" path="/privacy" />
          <Tab Icon={SettingsIcon} label="Settings" path="/settings" />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}

export default SideBar;
