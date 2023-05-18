import { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <main>
      <SideBar />
      <div className="pl-[300px]">
        <NavBar />
        <div className="p-[20px]">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
