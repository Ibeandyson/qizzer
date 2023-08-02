"use client";

import useAppRouter from "@/global/hooks/useAppRouter";
import { useEffect } from "react";
import {
  chakra,
  Image,
  Box,
  Flex,
  Text,
  Divider,
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@chakra-ui/react";
import BackArrowIcon from "@/components/SVG-Icons/BackArrowIcon";
import Link from "next/link";

export default function OrdersDetails({ params }: { params: { id: string } }) {
  const { setParamsForNavigation } = useAppRouter();

  useEffect(() => {
    setParamsForNavigation(params.id);
  }, []);
  return (
    <chakra.div
      bg="white"
      p={{ base: "5px", lg: "20px" }}
      boxShadow={{ base: "none", md: "base" }}
      width="100%"
      zIndex="1"
    >
      <Flex>
        <Link href="/dashboard/orders">
          <BackArrowIcon />
        </Link>

        <Text pl="10px" fontSize="13px">
          Order Details
        </Text>
      </Flex>
      <Divider mb="40px" mt="30px" orientation="horizontal" />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr fontSize="5px" color="black">
              <Th>S/N</Th>
              <Th>Product Details</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody fontSize="12px">
            <Tr>
              <Td>1</Td>
              <Td display="flex" w="250px">
                <Image
                  height={50}
                  width={50}
                  src="https://www.shutterstock.com/image-photo/set-beautiful-leather-handbags-your-260nw-77315059.jpg"
                />
                <Text noOfLines={[1, 2]} p="10px">
                  Finda bag
                </Text>
              </Td>
              <Td>21,Jan,2023</Td>
              <Td>N6000</Td>
              <Td>2</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box mb="30px" p="20px">
        <Text mt="10px" float="right" fontSize="11px" fontWeight="600">
          GRAND TOTAL: N2400
        </Text>
      </Box>
      <Divider mb="40px" mt="30px" orientation="horizontal" />
      <Box border="0.2px solid ">
        <Text align="center" mt="20px" fontWeight="600" fontSize="13px">
          Customer&apos;s Details
        </Text>
        <Divider mb="40px" mt="20px" orientation="horizontal" />
        <chakra.div p="20px" pl="30px">
          <Text fontWeight="600" fontSize="12px" mb="10px">
            Customer’s Name:
            <span style={{ fontWeight: 400, paddingLeft: "8px" }}>
              C.C Adonai Boutique
            </span>
          </Text>
          <Text fontWeight="600" fontSize="12px" mb="10px">
            Customer’s Address:
            <span style={{ fontWeight: 400, paddingLeft: "8px" }}>
              No 15 Adelabu street off Ikeja expressway, Lagos.
            </span>
          </Text>
          <Text fontWeight="600" fontSize="12px" mb="10px">
            Customer’s Contact Number:
            <span style={{ fontWeight: 400, paddingLeft: "8px" }}>
              +234 983 890 8980
            </span>
          </Text>
        </chakra.div>{" "}
      </Box>
      <Flex gap={2} mt="20px">
        <Box w="100%" border="0.2px solid ">
          <Text align="center" mt="20px" fontWeight="600" fontSize="13px">
            Payment Details
          </Text>
          <Divider mb="40px" mt="20px" orientation="horizontal" />
          <chakra.div p="20px" pl="30px">
            <Text fontWeight="600" fontSize="12px" mb="10px">
              Items Price:
              <span style={{ fontWeight: 400, paddingLeft: "8px" }}>N00</span>
            </Text>
            <Text fontWeight="600" fontSize="12px" mb="10px">
              Delivery Fee:
              <span style={{ fontWeight: 400, paddingLeft: "8px" }}>N00</span>
            </Text>
            <Text fontWeight="600" fontSize="12px" mb="10px">
              Toatal Fee:
              <span style={{ fontWeight: 400, paddingLeft: "8px" }}>N00</span>
            </Text>
          </chakra.div>{" "}
        </Box>
        <Box w="100%" border="0.2px solid" ml="auto">
          <Text align="center" mt="20px" fontWeight="600" fontSize="13px">
            Delivery Details
          </Text>
          <Divider mb="40px" mt="20px" orientation="horizontal" />
          <chakra.div p="20px" pl="30px">
            <Text fontWeight="600" fontSize="12px" mb="10px">
              Delivery Address:
              <span style={{ fontWeight: 400, paddingLeft: "8px" }}>
                No 4 Odubanjo Street-Second Carwash Bus stop, Governor&apos;s
                Road, Ikotun, Lagos.
              </span>
            </Text>
          </chakra.div>
        </Box>
      </Flex>
      <Flex
        mt="30px"
        mb="30px"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Button w="100%" bg="red" color="white" fontSize="12px">
          Reject Order
        </Button>
        <Button w="100%" bg="green" color="white" fontSize="12px">
          Comfirm Order
        </Button>
      </Flex>
    </chakra.div>
  );
}
