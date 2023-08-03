"use client";

import { chakra } from "@chakra-ui/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  Icon: ({ color }: { color: string }) => JSX.Element;
  label: string;
  path: string;
  childPath?: string[];
};

function Tab({ Icon, label, path, childPath }: Props) {
  const router = useRouter();
  const pathname: any = usePathname();
  const [active, setActive] = useState<boolean>(false);
  return (
    <chakra.div
      onClick={() => router.push(path)}
      w="full"
      h="48px"
      bg={
        pathname === path || active || childPath?.includes(pathname)
          ? "#E9E6F1"
          : "#FFF"
      }
      color={
        pathname === path || active || childPath?.includes(pathname)
          ? "#4E3391"
          : "#7A7A7A"
      }
      borderRadius="4px"
      display="flex"
      alignItems="center"
      gap="10px"
      px="20px"
      cursor="pointer"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <Icon
        color={
          pathname === path || active || childPath?.includes(pathname)
            ? "#4E3391"
            : "#7A7A7A"
        }
      />
      <chakra.p fontSize="14px" fontWeight={500}>
        {label}
      </chakra.p>
    </chakra.div>
  );
}

export default Tab;
