import DropDownIcon from "@/components/SVG-Icons/DropDownIcon";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  chakra,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  data: {
    label: string;
    Icon: ({ color }: { color: string }) => JSX.Element;
    subTabs: {
      subLabel: string;
      path: string;
    }[];
  };
};

function AccordionTab({ data: { label, Icon, subTabs } }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <AccordionButton
            w="full"
            h="48px"
            bg={isExpanded ? "#E9E6F1" : "#FFF"}
            borderRadius="4px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="20px"
            cursor="pointer"
            _hover={{ bg: "#E9E6F1" }}
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
          >
            <chakra.div display="flex" alignItems="center" gap="10px">
              <Icon color={isExpanded || active ? "#4E3391" : "#7A7A7A"} />
              <chakra.p
                fontSize="14px"
                fontWeight={500}
                color={isExpanded || active ? "#4E3391" : "#7A7A7A"}
                className="text-[14px] font-normal text-primary"
              >
                {label}
              </chakra.p>
            </chakra.div>
            <DropDownIcon rotate={isExpanded} />
          </AccordionButton>
          <AccordionPanel bg="#fff" borderBottom={0} py="10px">
            {subTabs.map(({ subLabel }, id) => (
              <chakra.div
                key={id}
                h="38px"
                display="flex"
                alignItems="center"
                fontSize="14px"
                fontWeight={500}
                color="#7A7A7A"
                cursor="pointer"
                pl="20px"
                _hover={{ color: "#4E3391" }}
              >
                <chakra.p>{subLabel}</chakra.p>
              </chakra.div>
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default AccordionTab;
