"use client";

import FinanceIcon from "@/components/SVG-Icons/FinanceIcon";
import StoreIcon from "@/components/SVG-Icons/StoreIcon";
import { Accordion } from "@chakra-ui/react";
import AccordionTab from "./AccordionTab";

const multiTabsData = [
  {
    label: "Finance",
    Icon: FinanceIcon,
    subTabs: [
      {
        subLabel: "My Wallet",
        path: "",
      },
      {
        subLabel: "Add Bank Account",
        path: "",
      },
      {
        subLabel: "Reset Wallet Pin",
        path: "",
      },
    ],
  },
  {
    label: "Store",
    Icon: StoreIcon,
    subTabs: [
      {
        subLabel: "Manage Products",
        path: "",
      },
      {
        subLabel: "Manage Store",
        path: "",
      },
    ],
  },
  {
    label: "Sellers",
    Icon: StoreIcon,
    subTabs: [],
  },
];

function MultiTab() {
  return (
    <Accordion>
      {multiTabsData.map((data, i) => (
        <AccordionTab key={i} data={data} />
      ))}
    </Accordion>
  );
}

export default MultiTab;
