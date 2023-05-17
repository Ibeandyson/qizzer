import SideBar from "@/components/Dashboard/SideBar";
import "../globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Dashboard/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        <div className="pl-[300px]">
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
