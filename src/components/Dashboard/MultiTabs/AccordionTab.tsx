import DropDownIcon from "@/components/SVG-Icons/DropDownIcon";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  chakra,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  data: {
    label: string;
    Icon: ({ color }: { color: string }) => JSX.Element;
    subTabs: {
      subLabel: string;
      path: string;
      subPaths: string[];
    }[];
    childPaths: string[];
  };
};

function AccordionTab({ data: { label, Icon, subTabs, childPaths } }: Props) {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const pathname: any = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <AccordionButton
            w="full"
            h="48px"
            bg={
              isExpanded ||
              subTabs
                .map((data) => data.path)
                .concat(childPaths)
                .includes(pathname)
                ? "#E9E6F1"
                : "#FFF"
            }
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
              <Icon
                color={
                  isExpanded ||
                  active ||
                  subTabs
                    .map((data) => data.path)
                    .concat(childPaths)
                    .includes(pathname)
                    ? "#4E3391"
                    : "#7A7A7A"
                }
              />
              <chakra.p
                fontSize="14px"
                fontWeight={500}
                color={
                  isExpanded ||
                  active ||
                  subTabs
                    .map((data) => data.path)
                    .concat(childPaths)
                    .includes(pathname)
                    ? "#4E3391"
                    : "#7A7A7A"
                }
                className="text-[14px] font-normal text-primary"
              >
                {label}
              </chakra.p>
            </chakra.div>
            <DropDownIcon rotate={isExpanded} />
          </AccordionButton>
          <AccordionPanel bg="#fff" borderBottom={0} py="10px">
            {subTabs.map(({ subLabel, path, subPaths }, id) => (
              <chakra.div
                onClick={() => router.push(path)}
                key={id}
                h="38px"
                display="flex"
                alignItems="center"
                fontSize="14px"
                fontWeight={500}
                color={
                  path === pathname || subPaths.includes(pathname)
                    ? "#220075"
                    : "#7A7A7A"
                }
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
