"use client";

import StoreIcon from "@/components/SVG-Icons/StoreIcon";
import { Accordion } from "@chakra-ui/react";
import AccordionTab from "./AccordionTab";
import useAppRouter from "@/global/hooks/useAppRouter";
import { useEffect } from "react";

function MultiTabs() {
  const { paramsForNavigation } = useAppRouter();

  useEffect(() => {
    console.log(paramsForNavigation);
  }, [paramsForNavigation]);

  const multiTabsData = [
    {
      label: "Store",
      Icon: StoreIcon,
      subTabs: [
        {
          subLabel: "Manage Products",
          path: "/dashboard/manage-products",
          subPaths: [`/dashboard/products/${paramsForNavigation}`],
        },
        {
          subLabel: "Manage Store",
          path: "/dashboard/manage-store",
          subPaths: [],
        },
      ],
      childPaths: [`/dashboard/products/${paramsForNavigation}`],
    },
    {
      label: "Sellers",
      Icon: StoreIcon,
      subTabs: [],
      childPaths: [],
    },
  ];

  return (
    <Accordion>
      {multiTabsData.map((data, i) => (
        <AccordionTab key={i} data={data} />
      ))}
    </Accordion>
  );
}

export default MultiTabs;
