import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Corey Pierce software dev portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
