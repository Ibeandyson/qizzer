import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import InputUI from "@/components/ReuseableComponents/InputUI";
import React from "react";
import { chakra } from "@chakra-ui/react";

type Props = {};

function CreateStore({}: Props) {
  return (
    <chakra.div>
      <chakra.div
        bg="#D9D9D9"
        h="100px"
        w="100px"
        mx="auto"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <chakra.img
          src="/icons/ic_round-cloud-upload.svg"
          alt="ic_round-cloud-upload"
        />
        <chakra.p fontSize="10px">Upload Logo</chakra.p>
      </chakra.div>
      <chakra.div
        mt="30px"
        display="grid"
        gap="20px"
        gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
      >
        <InputUI
          value={""}
          type="text"
          lable="Store Name *"
          name="StoreName"
          onchange={() => {}}
        />
        <InputUI
          value={""}
          type="text"
          lable="Shop address *"
          name="ShopAddress"
          onchange={() => {}}
        />
        <InputUI
          value={""}
          type="text"
          lable="City *"
          name="City"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="State *"
          name="State"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="Postal Code"
          name="Postal Code"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="Account manager phone number *"
          name="phoneNumber"
          onchange={() => {}}
        />
      </chakra.div>
      <chakra.div display="flex" justifyContent="center" my="30px">
        <ButtonUI label="Create Store" w="430px" onClick={() => {}} />
      </chakra.div>
    </chakra.div>
  );
}

export default CreateStore;
