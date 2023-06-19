import React from "react";
import ButtonUI from "../ButtonUI";
import BottomSheetUI from ".";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function SampleBottomSheet({ isOpen, onClose }: Props) {
  return (
    <BottomSheetUI
      isOpen={isOpen}
      onClose={onClose}
      footerChildren={
        <ButtonUI label="Button" loading={false} onClick={() => {}} />
      }
    >
      SampleModal
    </BottomSheetUI>
  );
}

export default SampleBottomSheet;
