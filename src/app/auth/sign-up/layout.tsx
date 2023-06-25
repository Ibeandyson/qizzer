import "../../styles/globals.css";
import AuthLayout from "@/app/auth/Layout";
import Providers from "../../providers";

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
      <body>
        <Providers>
          <AuthLayout>{children}</AuthLayout>
        </Providers>
      </body>
    </html>
  );
}
