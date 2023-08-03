"use client";

import React, { useEffect, useState } from "react";

import { chakra } from "@chakra-ui/react";

import ActionsDropDown, {
  ActionProps,
} from "@/components/ReuseableComponents/DropDown";

import useAppRouter from "@/global/hooks/useAppRouter";

function Product({ params }: { params: { id: string } }) {
  const { setParamsForNavigation } = useAppRouter();

  useEffect(() => {
    setParamsForNavigation(params.id);
  }, []);

  const actions: ActionProps[] = [
    {
      label: "Edit",
      onAction: () => {},
    },
    {
      label: "Publish",
      onAction: () => {},
    },
    {
      label: "Delete",
      onAction: () => {},
      color: "#EC0303",
    },
  ];

  return (
    <chakra.div
      w="full"
      minH="50vh"
      bg="#fff"
      boxShadow={{ lg: "4px 0px 16px 0px rgba(0, 0, 0, 0.08)" }}
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
            Product Details
          </chakra.p>
        </chakra.div>
        <ActionsDropDown actions={actions} />
      </chakra.div>
      <></>
    </chakra.div>
  );
}

export default Product;
