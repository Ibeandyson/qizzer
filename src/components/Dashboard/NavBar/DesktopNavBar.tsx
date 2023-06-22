import {Avatar, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, chakra} from '@chakra-ui/react';
import SearchIcon from '../../SVG-Icons/SearchIcon';
import OrdersIcon from '../../SVG-Icons/OrdersIcon';
import NotificationIcon from '../../SVG-Icons/NotificationIcon';
import DropDownIcon from '../../SVG-Icons/DropDownIcon';

export default function DesktopNavBar() {
  return (
    <chakra.div
      h="130px"
      display={{base: 'none', lg: 'flex'}}
      justifyContent="space-between"
      alignItems="center"
      boxShadow="16px 0px 16px rgba(0, 0, 0, 0.08)"
      px="50px"
      w="100%"
      top={0}
      left={0}
      zIndex="10"
      bg="#ffffff"
      position="sticky">
      <chakra.div>
        <chakra.p fontSize="20px" fontWeight={600}>
          Welcome Synclaire,
        </chakra.p>
        <chakra.p fontSize="12px" fontWeight={400} color="#7A7A7A">
          Here’s what is happening in your TrustPaddi account today.
        </chakra.p>
      </chakra.div>
      <chakra.div display="flex" alignItems="center" gap="20px">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="#7A7A7A" />
          </InputLeftElement>
          <Input
            placeholder="Search for any transactions "
            bg="#F4EDFF"
            borderRadius="8px"
            _placeholder={{fontSize: '12px', fontWeight: 400}}
            _focus={{borderColor: '#220075'}}
          />
        </InputGroup>
        <IconButton aria-label="orders" icon={<OrdersIcon  color="#7A7A7A" />} bg="#FFF" _hover={{bg: '#E9E6F1'}} />
        <IconButton aria-label="orders" icon={<NotificationIcon color="#7A7A7A" />} bg="#FFF" _hover={{bg: '#E9E6F1'}} />

        <Menu>
          {({isOpen}) => (
            <>
              <MenuButton>
                <chakra.div display="flex" alignItems="center" gap="10px">
                  <Avatar
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    bg="#220075"
                    color="#FFF"
                    width="30px"
                    height="30px"
                  />

                  <DropDownIcon rotate={isOpen} />
                </chakra.div>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </chakra.div>
    </chakra.div>
  );
}
