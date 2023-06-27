import {
  chakra,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
import FinanceIcon from "@/components/SVG-Icons/FinanceIcon";

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
        <DrawerBody pt="40px">
          <chakra.div display="flex" justifyContent="center">
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              name="Ozumah Ebenezer"
              bg="#220075"
              color="#FFF"
              size="xl"
              mx="auto"
            />
          </chakra.div>
          <chakra.div w="full" h="0px" border="1px solid #D7D7D7" mt="30px" />
          <chakra.div pt="30px" px="5px">
            <chakra.p fontSize="12px" fontWeight={500} color="#6C6C6C">
              MENU
            </chakra.p>
            <chakra.div mt="30px">
              <Tab
                Icon={DashboardIcon}
                label="Dashboard"
                path="/dashboard/overview"
              />
              <Tab
                Icon={FinanceIcon}
                label="Finance"
                path="/dashboard/finance"
              />

              <MultiTabs />
              <Tab Icon={OrdersIcon} label="Orders" path="/dashboard/orders" />
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
