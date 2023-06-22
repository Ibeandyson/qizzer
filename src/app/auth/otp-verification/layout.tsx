import "../../styles/globals.css";
import { Inter } from "next/font/google";
import VerificationLayout from "@/components/Verification/Layout";
import Providers from "../../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Verification Succesful | TrustPaddi",
  description: "",
};

export default function OtpVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <VerificationLayout>{children}</VerificationLayout>
        </Providers>
      </body>
    </html>
  );
}
