import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Share/Navbar";
import Chatbot from "@/components/Share/Chatbot";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JuiceLab - It agency",
  description: "JuiceLab - It agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="relative font-manrope">
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
