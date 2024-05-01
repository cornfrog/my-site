import type { Metadata } from "next";
import "./globals.scss";
import TopBar from "./components/TopBar";

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
        <TopBar/>
        {children}
      </body>
    </html>
  );
}
