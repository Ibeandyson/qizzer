"use client";

import React, { useState } from "react";

import { Select, chakra } from "@chakra-ui/react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import PlusIcon from "@/components/SVG-Icons/PlusIcon";
import InputUI from "@/components/ReuseableComponents/InputUI";
type Props = {};

function ManageStore({}: Props) {
  const [showStoreForm, setShowStoreForm] = useState<boolean>(false);

  return (
    <chakra.div
      w="full"
      minH="50vh"
      bg="#fff"
      boxShadow="4px 0px 16px 0px rgba(0, 0, 0, 0.08)"
      borderRadius="4px"
      px={{ lg: "20px" }}
      pb="40px"
    >
      <chakra.div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py="30px"
      >
        <chakra.div display="flex" alignItems="center" gap="10px">
          <chakra.div
            w={{ base: "13px", lg: "17px" }}
            h={{ base: "34px", lg: "40px" }}
            borderRadius="4px"
            bg="#220075"
          />
          <chakra.p
            fontSize={{ base: "16px", lg: "16px" }}
            fontWeight="500"
            color="#000000"
          >
            {showStoreForm ? "Create New Store" : "Manage Store"}
          </chakra.p>
        </chakra.div>
        <chakra.button
          w="108px"
          h="36px"
          borderRadius="4px"
          border="1px solid #7A7A7A"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        ></chakra.button>
      </chakra.div>
      {!showStoreForm ? (
        <chakra.div
          w="full"
          h="500px"
          borderRadius="4px"
          border="2px dashed #7A66AC"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="15px"
          flexDir="column"
        >
          <chakra.img src="/imgs/cuate.png" w="250px" />
          <chakra.p
            fontSize={{ base: "14px", lg: "20px" }}
            fontWeight="500"
            color="#1E1E1E"
          >
            No store created yet.
          </chakra.p>
          <chakra.p
            fontSize={{
              base: "12px",
              lg: "14px",
            }}
            fontWeight="400"
            color="#747474"
            mb="20px"
          >
            Please click the button below to create a store as a seller.
          </chakra.p>
          <ButtonUI
            leftIcon={<PlusIcon />}
            label="Create New Store"
            loading={false}
            onClick={() => setShowStoreForm(true)}
            w="200px"
          />
        </chakra.div>
      ) : (
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
      )}
    </chakra.div>
  );
}

export default ManageStore;
