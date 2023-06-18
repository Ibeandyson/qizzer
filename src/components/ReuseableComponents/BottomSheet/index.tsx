import React, { ReactNode } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footerChildren?: ReactNode;
};

function BottomSheetUI({ isOpen, onClose, children, footerChildren }: Props) {
  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        minH="50vh"
        borderTopRightRadius="30px"
        borderTopLeftRadius="30px"
      >
        <DrawerCloseButton />
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter>{footerChildren}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default BottomSheetUI;
