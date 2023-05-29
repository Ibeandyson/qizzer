import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  chakra,
} from "@chakra-ui/react";
import OrdersIcon from "@/components/SVG-Icons/OrdersIcon";
import DashboardIcon from "@/components/SVG-Icons/DashboardIcon";
import LogisticsIcon from "@/components/SVG-Icons/LogisticsIcon";
import PrivacyIcon from "@/components/SVG-Icons/PrivacyIcon";
import SettingsIcon from "@/components/SVG-Icons/SettingsIcon";
import GetHelpIcon from "@/components/SVG-Icons/GetHelpIcon";
import LogoutIcon from "@/components/SVG-Icons/LogoutIcon";
import MultiTabs from "../MultiTabs";
import Tab from "../Tab";

type Props = {
  open: boolean;
  onClose: () => void;
};

function MobileSideBar({ open, onClose }: Props) {
  return (
    <Drawer isOpen={open} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent borderTopLeftRadius="30px" borderBottomLeftRadius="30px">
        <DrawerCloseButton />
        <DrawerBody>
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
        </DrawerBody>
        <DrawerFooter>
          <chakra.div w="full">
            <Tab Icon={GetHelpIcon} label="Get Help" path="/" />
            <Tab Icon={LogoutIcon} label="Logout" path="/" />
          </chakra.div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileSideBar;
