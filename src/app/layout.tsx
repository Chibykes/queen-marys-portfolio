import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ weight: ["400", "600", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mary the Analyst",
  description: "Portfolio webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white`}>{children}</body>
    </html>
  );
}
