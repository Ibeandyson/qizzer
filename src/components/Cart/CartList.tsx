"use client"
import { TableContainer, Table, Thead, Tbody, Tr, Td, Th, Image, Box, Flex, Text, Divider, Button } from '@chakra-ui/react';
import DeleteIcon from '../SVG-Icons/DeleteIcon';

const CartList = () => {
  return (
    <>
      <TableContainer h="60vh" overflowY="auto">
        <Table variant="simple">
          <Thead>
            <Tr fontSize="5px" color="black">
              <Th>Product Details</Th>
              <Th>Store Name</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody minH={30} fontSize="12px">
            {[2, 2, 2, 2, 2, 4, , 4, 4, 4, 4].map((index) => (
              <Tr key={index}>
                <Td display="flex" w="200px">
                  <Image
                    height={50}
                    width={50}
                    src="https://www.shutterstock.com/image-photo/set-beautiful-leather-handbags-your-260nw-77315059.jpg"
                  />
                  <Text noOfLines={[1, 2]} p="10px">
                    Finda bag
                  </Text>
                </Td>
                <Td>
                  <Text textDecoration="underline">Bagmall</Text>
                </Td>
                <Td>
                  <Flex gap="3">
                    <Text cursor="pointer" fontSize="30px" fontWeight="500">
                      -
                    </Text>
                    <Text>3</Text>
                    <Text cursor="pointer" fontSize="25px" fontWeight="500">
                      +
                    </Text>
                  </Flex>
                </Td>
                <Td>N6000</Td>
                <Td>2</Td>
                <Td>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartList;
