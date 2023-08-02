"use client";

import StoreIcon from "@/components/SVG-Icons/StoreIcon";
import { Accordion } from "@chakra-ui/react";
import AccordionTab from "./AccordionTab";

const multiTabsData = [
  {
    label: "Store",
    Icon: StoreIcon,
    subTabs: [
      {
        subLabel: "Manage Products",
        path: "/dashboard/manage-products",
      },
      {
        subLabel: "Manage Store",
        path: "/dashboard/manage-store",
      },
    ],
  },
  {
    label: "Sellers",
    Icon: StoreIcon,
    subTabs: [],
  },
];

function MultiTabs() {
  return (
    <Accordion>
      {multiTabsData.map((data, i) => (
        <AccordionTab key={i} data={data} />
      ))}
    </Accordion>
  );
}

export default MultiTabs;
