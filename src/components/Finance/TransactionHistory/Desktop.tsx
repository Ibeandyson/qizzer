import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";
import FilterIcon from "@/components/SVG-Icons/FilterIcon";

type Props = {};

const tableHeader: string[] = [
  "S/N",
  "Purpose",
  "Narration",
  "Date",
  "Amount",
  "Type",
];

function Desktop({}: Props) {
  return (
    <chakra.div display={{ base: "none", lg: "block" }}>
      <Table>
        <Thead>
          <Tr fontSize="5px" color="black">
            {tableHeader.map((data) => (
              <Th
                fontSize="16px"
                fontWeight="500"
                color="#1E1E1E"
                textTransform="capitalize"
                key={data}
              >
                {data}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody fontSize="12px">
          <Tr>
            <Td fontSize="16px">1</Td>
            <Td fontSize="16px">Transfer</Td>
            <Td fontSize="16px">Paid for Tru...</Td>
            <Td>
              <chakra.p fontSize="16px">21, Jan, 2023</chakra.p>
              <chakra.p fontSize="12px" color="#7A7A7A">
                05:00:30 PM
              </chakra.p>
            </Td>
            <Td fontSize="16px" color="#EC0303" fontWeight="500">
              +$65.00
            </Td>
            <Td fontSize="16px" color="#EC0303" fontWeight="500">
              Debit
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </chakra.div>
  );
}

export default Desktop;
