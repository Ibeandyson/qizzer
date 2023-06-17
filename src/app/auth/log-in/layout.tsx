import "../../styles/globals.css";
import AuthLayout from "@/app/auth/Layout";
import Providers from "../../providers";

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
      <body>
        <Providers>
          <AuthLayout>{children}</AuthLayout>
        </Providers>
      </body>
    </html>
  );
}
