import "../styles/globals.css";
import AuthLayout from "@/components/Auth/Layout";
import { Inter } from "next/font/google";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sign Up | TrustPaddi",
  description: "",
};

export default function SignUpLayout({
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
