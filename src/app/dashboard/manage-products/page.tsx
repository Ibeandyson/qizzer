"use client";

import React, { useState } from "react";

import { chakra } from "@chakra-ui/react";
import ButtonUI from "@/components/ReuseableComponents/ButtonUI";
import PlusIcon from "@/components/SVG-Icons/PlusIcon";
import InputUI from "@/components/ReuseableComponents/InputUI";
import CreateProduct from "@/components/Store/ManageProducts/CreateProduct";
type Props = {};

function ManageProducts({}: Props) {
  const [showProductsForm, setShowProductsForm] = useState<boolean>(false);

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
            {showProductsForm ? "Create New Product" : "Manage Products"}
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
      {Array(20).fill("").length < 1 ? (
        <>
          {!showProductsForm ? (
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
                No product added yet.
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
                Please click the button below to add a product to your store.
              </chakra.p>
              <ButtonUI
                leftIcon={<PlusIcon />}
                label="Add New Product"
                loading={false}
                onClick={() => setShowProductsForm(true)}
                w="200px"
              />
            </chakra.div>
          ) : (
            <CreateProduct />
          )}
        </>
      ) : (
        <></>
      )}
    </chakra.div>
  );
}

export default ManageProducts;
