import React, { ReactNode } from "react";
import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  description?: string;
  children: ReactNode;
};

function ModalUI({ isOpen, onClose, header, description, children }: Props) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx="30px" py="30px">
        <ModalHeader
          fontSize={{ base: "20px", lg: "28px" }}
          fontWeight="500"
          color="#1E1E1E"
          textAlign="center"
        >
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pt="0px">
          {description ? (
            <chakra.p textAlign="center" fontSize="16px" color="#333333">
              {description}
            </chakra.p>
          ) : (
            ""
          )}
          <chakra.div mt="20px">{children}</chakra.div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalUI;
