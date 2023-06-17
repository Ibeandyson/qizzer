import "../../styles/globals.css";
import AuthLayout from "@/app/auth/Layout";
import { Inter } from "next/font/google";
import Providers from "../../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Log In | TrustPaddi",
  description: "",
};

export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthLayout>{children}</AuthLayout>
        </Providers>
      </body>
    </html>
  );
}
