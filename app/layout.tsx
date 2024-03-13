import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Corey Pierce software dev profolio site",
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
