'use client';
import {useState} from 'react';
import {
  chakra,
  Box,
  Flex,
  Text,
  Divider,
  ButtonGroup,
  Button,
  TableContainer,
  GridItem,
  Grid,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';
import OverviewCards from '@/components/Dashboard/OverviewCards';
import NairaCircleIcon from '@/components/SVG-Icons/NairaCircleIcon';
import CartCircleIcon from '@/components/SVG-Icons/CartCircleIcon';
import BagCircleIcon from '@/components/SVG-Icons/BagCircleIcon';
import RectangleShapeIcon from '@/components/SVG-Icons/RectangleShapeIcon';
import FilterButton from '@/components/ReuseableComponents/FilterButton';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from 'chart.js';
import {Doughnut, Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
const data = {
  labels: ['Delivered', 'Pending', 'Cancelled'],
  datasets: [
    {
      label: 'Orders',
      data: [12, 29, 40],
      backgroundColor: ['#26C62C', '#FFD923', '#EC0303'],
    },
  ],
};

const options1 = {
  layout: {
    padding: {
      top: 0,
      right: 5,
      bottom: 50,
      left: 5,
    },
  },
  legend: {
    position: 'bottom',
    labels: {
      fontColor: 'red',
    },
  },
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 100, // Set the maximum value on the y-axis
    },
    x: {
      grid: {
        display: false, // Hide the x-axis grid lines
      },
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 0,
      right: 5,
      bottom: 50,
      left: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      width: '30px',
    },
  },
};

const dataBar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [20, 30, 80, 40, 20, 46, 36, 70, 67, 63, 70, 30],
      backgroundColor: '#4E3391',
    },
    {
      label: 'Orders',
      data: [20, 60, 60, 40, 20, 46, 86, 40, 37, 73, 40, 20],
      backgroundColor: '#E9E6F1',
    },
  ],
};

export default function Dashboard() {
  const [viewSate, setViewState] = useState(false);
  return (
    <chakra.div>
      <section>
        <chakra.div bg="white" p={{base: '5px', lg: '20px'}} boxShadow={{base: 'none', md: 'base'}} width="100%" height="38vh" zIndex="1">
          <Flex mb="15px">
            <Box display="flex" alignItems="center" justifyContent="center">
              <RectangleShapeIcon />
              <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                Dashboard
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
          {!viewSate ? (
            <Flex width="100%" overflowY="auto" className="hide-scrollbar" gap={4}>
              <OverviewCards titel="Wallet Balance" value="N86,650.78" icon={<NairaCircleIcon />} />
              <OverviewCards titel="Total Orders" value="7" icon={<CartCircleIcon />} />
              <OverviewCards titel="Comfirmed Orders" value="5" icon={<BagCircleIcon />} />
            </Flex>
          ) : (
            <Flex width="100%" overflowY="auto" className="hide-scrollbar" gap={4}>
              <OverviewCards titel="Wallet Balance" value="N86,650.78" icon={<NairaCircleIcon />} />
              <OverviewCards titel="Toatal Product" value="5" icon={<BagCircleIcon />} />
              <OverviewCards titel="Total Orders" value="7" icon={<CartCircleIcon />} />
            </Flex>
          )}
        </chakra.div>
        {viewSate && (
          <chakra.div>
            <Grid templateColumns={['1fr', '1fr', 'repeat(3, 1fr)']} gap={4} mt={{base: '-55px', md: '20px'}}>
              <GridItem colSpan={{base: 0, md: 2}}>
                <chakra.div bg="white" p={{base: '5px', lg: '20px'}} boxShadow="base" width="100%" height="400px" zIndex="1">
                  <Flex mb="15px">
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <RectangleShapeIcon />
                      <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                        Sales Statistics
                      </Text>
                    </Box>
                  </Flex>
                  <Bar options={options} data={dataBar} />
                </chakra.div>
              </GridItem>
              <GridItem>
                <chakra.div bg="white" p={{base: '5px', lg: '20px'}} boxShadow="base" width="100%" height="400px" zIndex="1">
                  <Flex mb="15px">
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <RectangleShapeIcon />
                      <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                        Order Status
                      </Text>
                    </Box>
                  </Flex>
                  <chakra.div>
                    <Doughnut data={data} options={options1} />
                  </chakra.div>
                </chakra.div>
              </GridItem>
            </Grid>
          </chakra.div>
        )}

        {!viewSate ? (
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
                  Orders
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
                    <Th>Store Name</Th>
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
        ) : (
          <chakra.div
            bg="white"
            p={{base: '5px', lg: '20px'}}
            boxShadow={{base: 'none', md: 'md'}}
            width="100%"
            height="38vh"
            mt={{base: '20px', md: '5px'}}
            zIndex="1">
            <Flex mb="15px">
              <Box display="flex" alignItems="center" justifyContent="center">
                <RectangleShapeIcon />
                <Text ml="10px" fontSize="12px" fontWeight={600} color="#121212">
                  Orders
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
                    <Th>Customer's Name</Th>
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
        )}
      </section>
    </chakra.div>
  );
}
