import type { Metadata } from "next";
import { Inter, PT_Sans, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600", "700", "900"], subsets: ["latin"] });
const grotesk = Space_Grotesk({ weight: ["400", "600", "700"], subsets: ["latin"] });
const productSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const playwrite = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mary the Analyst",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>{children}</body>
    </html>
  );
}
