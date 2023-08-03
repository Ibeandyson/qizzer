import "../../../styles/globals.css";
import Layout from "@/app/dashboard/layout/Layout";
import Providers from "../../../providers";

export const metadata = {
  title: "Product",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
