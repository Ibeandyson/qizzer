import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  children: ReactNode;
};

function ModalUI({ isOpen, onClose, header, children }: Props) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx="30px" py="30px">
        <ModalHeader
          fontSize={{ base: "20px", lg: "32px" }}
          fontWeight="500"
          color="#1E1E1E"
          textAlign="center"
        >
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalUI;

// 794804
