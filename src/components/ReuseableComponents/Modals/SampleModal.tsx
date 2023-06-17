import React from "react";
import ModalUI from ".";
import ButtonUI from "../ButtonUI";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function SampleModal({ isOpen, onClose }: Props) {
  return (
    <ModalUI isOpen={isOpen} onClose={onClose} header="Transfer Successful">
      SampleModal
      <ButtonUI label="Button" loading={false} onClick={() => {}} />
    </ModalUI>
  );
}

export default SampleModal;
