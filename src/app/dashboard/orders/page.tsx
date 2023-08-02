'use client';
import {useState} from 'react';
import {chakra, Box, Flex, Text, Divider, ButtonGroup, Button, TableContainer, Table, Thead, Tbody, Tr, Td, Th} from '@chakra-ui/react';
import OrderCard from '@/components/Dashboard/OrderCard';
import RectangleShapeIcon from '@/components/SVG-Icons/RectangleShapeIcon';
import FilterButton from '@/components/ReuseableComponents/FilterButton';

export default function Orders() {
  const [viewSate, setViewState] = useState(false);
  return (
    <chakra.div>
      <section>
        <chakra.div bg="white" p={{base: '5px', lg: '20px'}} boxShadow={{base: 'none', md: 'base'}} width="100%" height="38vh" zIndex="1">
          <Flex mb="15px">
            <Box display="flex" alignItems="center" justifyContent="center">
              <RectangleShapeIcon />
              <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                Orders
              </Text>
            </Box>
            <Box ml="auto">
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  _hover={{backgroundColor: '#220075', color: 'white'}}
                  color={viewSate ? 'white' : 'black'}
                  onClick={() => setViewState(true)}
                  bg={viewSate ? '#220075' : 'transparent'}
                  fontSize="10px"
                  width="70px">
                  Store
                </Button>
                <Button
                  _hover={{backgroundColor: '#220075', color: 'white'}}
                  color={!viewSate ? 'white' : 'black'}
                  onClick={() => setViewState(false)}
                  bg={!viewSate ? '#220075' : 'transparent'}
                  fontSize="10px"
                  width="70px">
                  Individual
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
          <Divider mb="40px" orientation="horizontal" />

          <Flex width="100%" overflowY="auto" className="hide-scrollbar" gap={4}>
            <OrderCard iconeColor="#3D9B10" titel="Total Orders" value="40" onClick={() => {}} />
            <OrderCard iconeColor="#F69E18" titel="Returned Orders" value="0" onClick={() => {}} />
            <OrderCard iconeColor="#EC0303" titel="Disputed Orders" value="8" onClick={() => {}} />
          </Flex>
        </chakra.div>
        <chakra.div
          bg="white"
          p={{base: '5px', lg: '20px'}}
          boxShadow={{base: 'none', md: 'md'}}
          width="100%"
          height="38vh"
          mt={{base: '-50px', md: '5px'}}
          zIndex="1">
          <Flex mb="15px">
            <Box display="flex" alignItems="center" justifyContent="center">
              <RectangleShapeIcon />
              <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                Recent Orders
              </Text>
            </Box>
            <Box ml="auto">
              <FilterButton />
            </Box>
          </Flex>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr fontSize="5px" color="black">
                  <Th>S/N</Th>
                  <Th>{!viewSate ? 'Store Name' : 'Customer Name'}</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody fontSize="12px">
                <Tr>
                  <Td>1</Td>
                  <Td>Ibe Andyson</Td>
                  <Td>21,Jan,2023</Td>
                  <Td>N6000</Td>
                  <Td>Pending</Td>
                  <Td>
                    <Button
                      color="#7A7A7A"
                      variant="outline"
                      border="0.5px solid #7A7A7A"
                      fontSize="10px"
                      height="30px"
                      borderRadius="5px"
                      width="80px">
                      View Details
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </chakra.div>
      </section>
    </chakra.div>
  );
}
