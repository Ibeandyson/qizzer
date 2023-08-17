import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import DropDownIcon from "@/components/SVG-Icons/DropDownIcon";

export type ActionProps = {
  label: string;
  onAction: () => void;
  color?: string;
  Icon?: any;
};

type Props = {
  actions: ActionProps[];
};

function ActionsDropDown({ actions }: Props) {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            bg="#220075"
            w={{ base: "72.5px", lg: "119px" }}
            h={{ base: "25.06px", lg: "41px" }}
            borderRadius={{ base: "5px", lg: "8px" }}
            color="#fff"
            fontSize={{ base: "9.778px", lg: "16px" }}
            px={{ base: "10px", lg: "20px" }}
            fontWeight={500}
            as={Button}
            rightIcon={<DropDownIcon rotate={isOpen} color="#FFF" />}
            _hover={{}}
            _active={{}}
          >
            Actions
          </MenuButton>
          <MenuList>
            {actions.map(({ label, onAction, color, Icon }, index) => (
              <MenuItem
                key={index}
                as={Button}
                leftIcon={Icon}
                onClick={onAction}
                color={color ? color : "#1E1E1E"}
                h={{ base: "24.78px", lg: "41px" }}
                fontSize={{ base: "9.778px", lg: "16px" }}
                _hover={{ bg: "#E9E6F1", color: "#220075" }}
              >
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default ActionsDropDown;
