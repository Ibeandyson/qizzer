import "./styles/globals.css";

export const metadata = {
  title: "TrustPaddi",
  description: "TrustPaddi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
