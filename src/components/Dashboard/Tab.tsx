"use client";
import React from "react";
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
    <div
      onClick={() => router.push(path)}
      className="w-full h-[38px] bg-[#E9E6F1] rounded-[4px] flex items-center gap-[10px] px-[20px] cursor-pointer"
    >
      <DashboardIcon color={pathname === path ? "#4E3391" : "#7A7A7A"} />
      <p className="text-[14px] font-normal text-primary">{label}</p>
    </div>
  );
}

export default Tab;
