import React, { useState } from "react";
import ModalUI from ".";
import ButtonUI from "../ReuseableComponents/ButtonUI";
import InputUI from "../ReuseableComponents/InputUI";

import { HStack, PinInput, PinInputField, chakra } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function TransferModal({ isOpen, onClose }: Props) {
  const [formStep, setFormStep] = useState<"amount" | "tag" | "pin">("amount");
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
          title: "Transfer to Paddi account",
          description: "Enter the  amount you would like to transfer",
        };

      case "tag":
        return {
          title: "Transfer to Paddi account",
          description: "Enter recipient pay tag",
        };
      case "pin":
        return {
          title: "Enter Wallet Pin",
          description: "Enter your wallet pin to authorize this transaction",
        };

      default:
        break;
    }
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
              onClick={() => setFormStep("tag")}
            />
          </chakra.div>
        ) : null}
        {formStep === "tag" ? (
          <chakra.div display="grid" gap="20px">
            <InputUI
              type="text"
              lable="Recipient pay tag"
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
            <ButtonUI label="Transfer" loading={false} onClick={() => {}} />
          </chakra.div>
        ) : null}
      </chakra.div>
    </ModalUI>
  );
}

export default TransferModal;
