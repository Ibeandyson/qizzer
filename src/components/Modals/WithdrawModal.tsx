import React, { useState } from "react";
import ModalUI from ".";
import ButtonUI from "../ReuseableComponents/ButtonUI";
import InputUI from "../ReuseableComponents/InputUI";

import { HStack, PinInput, PinInputField, chakra } from "@chakra-ui/react";
import { setShowSuccessModal } from "@/global/appState/slice/uiSlice";
import { useDispatch } from "react-redux";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function WithdrawModal({ isOpen, onClose }: Props) {
  const dispatch = useDispatch();

  const [formStep, setFormStep] = useState<"amount" | "bank" | "pin">("amount");
  const [formData, setFormData] = useState({
    amount: "",
    recipientPayTag: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const stage = (): any => {
    switch (formStep) {
      case "amount":
        return {
          title: "Available balance",
          description: "Provide valid bank account details",
        };

      case "bank":
        return {
          title: "Collect your money",
          description: "Provide valid bank account details",
        };
      case "pin":
        return {
          title: "Enter Wallet Pin",
          description: "Enter your wallet pin to withdraw to your local bank",
        };

      default:
        break;
    }
  };

  const handleTransfer = () => {
    onClose();
    dispatch(
      setShowSuccessModal({
        show: true,
        title: "Transfer Successful",
        buttonLabel: "View Total Balance",
        description: "You’ve successfully transferred $100 to Victoryroberts",
        path: "",
      })
    );
  };

  return (
    <ModalUI
      isOpen={isOpen}
      onClose={onClose}
      header={stage()?.title}
      description={stage()?.description}
    >
      <chakra.div>
        {formStep === "amount" ? (
          <chakra.div display="grid" gap="20px">
            <InputUI
              type="text"
              lable="Current balance"
              name="amount"
              value={formData.amount}
              onchange={handleChange}
            />
            <InputUI
              type="text"
              lable="Amount to transfer(minimum of 2000)"
              name="amount"
              value={formData.amount}
              onchange={handleChange}
            />
            <ButtonUI
              label="Continue"
              loading={false}
              onClick={() => setFormStep("bank")}
            />
          </chakra.div>
        ) : null}
        {formStep === "bank" ? (
          <chakra.div display="grid" gap="20px">
            <InputUI
              type="text"
              lable="Recipient pay tag"
              name="amount"
              value={formData.recipientPayTag}
              onchange={handleChange}
            />
            <InputUI
              type="text"
              lable="Account Name"
              name="amount"
              value={formData.recipientPayTag}
              onchange={handleChange}
            />
            <InputUI
              type="text"
              lable="Account Number"
              name="amount"
              value={formData.recipientPayTag}
              onchange={handleChange}
            />

            <ButtonUI
              label="Continue"
              loading={false}
              onClick={() => setFormStep("pin")}
            />
          </chakra.div>
        ) : null}
        {formStep === "pin" ? (
          <chakra.div display="grid" gap="20px">
            <HStack mx="auto">
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <ButtonUI
              label="Transfer"
              loading={false}
              onClick={handleTransfer}
            />
          </chakra.div>
        ) : null}
      </chakra.div>
    </ModalUI>
  );
}

export default WithdrawModal;
