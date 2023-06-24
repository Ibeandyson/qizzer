import {chakra} from '@chakra-ui/react';
import MultiTabs from '@/components/Dashboard/MultiTabs';
import Tab from '../Tab';
import DashboardIcon from '../../SVG-Icons/DashboardIcon';
import OrdersIcon from '../../SVG-Icons/OrdersIcon';
import LogisticsIcon from '../../SVG-Icons/LogisticsIcon';
import PrivacyIcon from '../../SVG-Icons/PrivacyIcon';
import SettingsIcon from '../../SVG-Icons/SettingsIcon';

function DesktopSideBar() {
  return (
    <chakra.div
      pos={{base: 'fixed'}}
      display={{base: 'none', lg: 'block'}}
      top="0px"
      left="0px"
      bottom="0px"
      w="220px"
      boxShadow="0px 16px 16px rgba(0, 0, 0, 0.08)"
      py="30px"
      px="20px">
      <chakra.img mx="auto" width="120px" height="120px" src="/imgs/logo-large.svg" alt="logo" />
      <chakra.div w="full" h="0px" border="0.5px solid #D7D7D7" mt="20px" />
      <chakra.div pt="40px" px="5px">
        <chakra.p fontSize="12px" fontWeight={500} color="#6C6C6C">
          MENU
        </chakra.p>
        <chakra.div ml="-20px" mt="10px">
          <Tab Icon={DashboardIcon} label="Dashboard" path="/dashboard/overview" />
          <MultiTabs />
          <Tab Icon={OrdersIcon} label="Orders" path="/dashboard/orders" />
          <Tab Icon={LogisticsIcon} label="Logistics" path="/dashboard/logistics" />
          <chakra.div w="full" h="0px" border="0.5px solid #D7D7D7" mt="20px" />
          <Tab Icon={PrivacyIcon} label="Privacy" path="/privacy" />
          <Tab Icon={SettingsIcon} label="Settings" path="/settings" />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}

export default DesktopSideBar;
