import React from "react";
import ModalUI from ".";
import ButtonUI from "../ReuseableComponents/ButtonUI";
import { useDispatch, useSelector } from "react-redux";
import { chakra, grid } from "@chakra-ui/react";
import { setShowSuccessModal } from "@/global/appState/slice/uiSlice";
type Props = {};

function SuccessfulModal({}: Props) {
  const dispatch = useDispatch();

  const { successModal } = useSelector((state: any) => state.ui);

  const handleClose = () => {
    dispatch(
      setShowSuccessModal({
        show: false,
        title: "",
        buttonLabel: "",
        description: "",
        path: "",
      })
    );
  };

  return (
    <ModalUI
      isOpen={successModal.show}
      onClose={handleClose}
      header={successModal.title}
    >
      <chakra.div display="grid" gap="20px">
        <chakra.div
          w={{ base: "120px", lg: "200px" }}
          h={{ base: "120px", lg: "200px" }}
          borderRadius="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#FFF2EB"
          mx="auto"
        >
          <chakra.img
            w={{ base: "80px", lg: "142px" }}
            src="/imgs/success-image.png"
          />
        </chakra.div>
        <chakra.p
          fontSize={{ base: "16px", lg: "20px" }}
          color="#333333"
          textAlign="center"
        >
          {successModal.description}
        </chakra.p>
        <ButtonUI
          label={successModal.buttonLabel}
          loading={false}
          onClick={() => successModal.handleAction()}
        />
      </chakra.div>
    </ModalUI>
  );
}

export default SuccessfulModal;
