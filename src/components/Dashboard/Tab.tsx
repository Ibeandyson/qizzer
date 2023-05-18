"use client";

import { chakra } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import DashboardIcon from "../SVG-Icons/DashboardIcon";

type Props = {
  label: string;
  path: string;
};

function Tab({ label, path }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <chakra.div
      onClick={() => router.push(path)}
      w="full"
      h="38px"
      bg="#E9E6F1"
      borderRadius="4px"
      display="flex"
      alignItems="center"
      gap="10px"
      px="20px"
      cursor="pointer"
    >
      <DashboardIcon color={pathname === path ? "#4E3391" : "#7A7A7A"} />
      <p className="text-[14px] font-normal text-primary">{label}</p>
    </chakra.div>
  );
}

export default Tab;
