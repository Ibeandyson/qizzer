import "../styles/globals.css";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
