import React from "react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import InputUI from "@/components/ReuseableComponents/InputUI";
import { Select, chakra } from "@chakra-ui/react";

type Props = {};

function CreateProduct({}: Props) {
  return (
    <chakra.div>
      <chakra.div
        mt="30px"
        display="grid"
        gap="20px"
        gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
      >
        <InputUI
          value={""}
          type="text"
          lable="Product Name *"
          name="ProductName"
          onchange={() => {}}
        />
        <chakra.div>
          <chakra.p
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ base: "14px", lg: "16px" }}
          >
            Category *
          </chakra.p>
          <Select h="50px" mt="8px" placeholder="Select Category">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </Select>
        </chakra.div>
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
          lable="Price (NGN) *"
          name="price"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="Quantity *"
          name="quantity"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="Address *"
          name="Address"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="City *"
          name="city"
          onchange={() => {}}
        />{" "}
        <InputUI
          value={""}
          type="text"
          lable="State *"
          name="state"
          onchange={() => {}}
        />
        <InputUI
          value={""}
          type="text"
          lable="Phone Number *"
          name="PhoneNumber"
          onchange={() => {}}
        />
      </chakra.div>
      <chakra.div
        display="flex"
        justifyContent="end"
        gap="30px"
        my="30px"
      ></chakra.div>
      <chakra.div display="flex" justifyContent="end" gap="30px" my="30px">
        <ButtonUI label="Save As Draft" w="163px" onClick={() => {}} />

        <ButtonUI label="Publish Product" w="163px" onClick={() => {}} />
      </chakra.div>
    </chakra.div>
  );
}

export default CreateProduct;
